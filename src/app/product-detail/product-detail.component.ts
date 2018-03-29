import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from "../services/product.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Product} from "../model/product";
import {ProductThumbnailService} from "../services/product-thumbnail.service"
import {ThumbnailImage} from "../model/thumbnailImage";
import {WishListService} from "../services/wish-list.service";
import {wishList} from "../model/wishList";
import {ShoppingCartService} from "../services/shopping-cart.service";
import {ShoppingCart} from "../model/shopping-cart";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  selectedProduct: Product = new Product();
  selectedProductThumbnailImages: ThumbnailImage[];
  imageZoomValue: any;
  userId: number = 1;
  wishList: wishList;
  shoppingCart: ShoppingCart;
  disabledAddToCart:boolean=false;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private productThumbnailService: ProductThumbnailService,
              private wishListService: WishListService,
              private shoppingCartService: ShoppingCartService) {
  }

  ngOnInit() {
    this.wishList = new wishList();
    this.shoppingCart = new ShoppingCart();
    this.activatedRoute.params.subscribe((params: Params) => {
      if ('id' in params) {
        this.getProduct(params['id']);
        this.getProductThumbnailImages(params['id']);
      }
    });
  }

  getProduct(id: number) {
    this.productService
      .getProductById(id)
      .then((res) => {
        this.selectedProduct = res;
        this.imageZoomValue = (res as Product).img;
      });
  }

  getProductThumbnailImages(productId: number) {
    this.productThumbnailService
      .getThumbnailImagesByProductId(productId)
      .then((res) => {
        this.selectedProductThumbnailImages = res;
      })
  }

  increaseQuantity() {
    this.selectedProduct.availableOptions.quantity += 1;
  }

  decreaseQuantity() {
    if (this.selectedProduct.availableOptions.quantity > 0) {
      this.selectedProduct.availableOptions.quantity -= 1;
    }

  }

  AddToWishList(product: Product) {

    this.wishList.userId = this.userId;
    this.wishList.product = product;
    this.wishList.date = new Date();

    this.wishListService.IsExistProductInWishlist(this.userId, product.id).then(result => {

      if (result.length == 0) {
        this.wishListService.addToWishList(this.wishList).then(result2 => {
          this.wishListService.addEvent.emit(1);
          // console.log(result2);
        });
      }
    });

  }

  AddToShoppingCart(product: Product) {
    this.disabledAddToCart=true;
    this.shoppingCart.userId = this.userId;
    this.shoppingCart.product = product;
    this.shoppingCart.quantity = this.selectedProduct.availableOptions.quantity;

    this.shoppingCartService.IsExistProductInShoppingCart(this.userId, product.id).then(result => {

      if (result.length == 0) {
        this.shoppingCartService.addToShoppingCart(this.shoppingCart).then(result2 => {
          this.shoppingCartService.addEvent.emit(1);
          this.disabledAddToCart=false;
          // console.log(result2);
        });
      }
      else {

        this.shoppingCartService.getShoppingCartByUserIdAndProductId(this.userId, product.id).then(result4 => {

          this.shoppingCart.id=result4[0].id;
          this.shoppingCart.quantity+=result4[0].quantity;

          this.shoppingCartService.UpdateShoppingCart(this.shoppingCart).then(result3 => {
            this.disabledAddToCart=false;
            // console.log(result3);

          });

        });


      }
    });

  }

}
