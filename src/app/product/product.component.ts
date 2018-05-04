import {Component, OnInit, Input} from '@angular/core';
import {Product} from "../model/product";
import {Router} from "@angular/router";
import {WishListService} from "../services/wish-list.service";
import {wishList} from "../model/wishList";
import {ShoppingCartService} from "../services/shopping-cart.service";
import {ShoppingCart} from "../model/shopping-cart";
import {ProductCompare} from "../model/product-compare";
import {ProductCompareService} from "../services/product-compare.service";
import {UserInfo} from "../model/userInfo";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() inputProduct: Product;
  userId: number = 1;
  wishList: wishList;
  shoppingCart: ShoppingCart;
  disabledAddToCart: boolean = false;
  productCompare: ProductCompare;

  constructor(private router: Router,
              private wishListService: WishListService,
              private shoppingCartService: ShoppingCartService,
              private productCompareService: ProductCompareService,
  ) {
  }

  ngOnInit() {

    let userInfoStorage = localStorage.getItem("userInfo");
    if (userInfoStorage) {
      let userInfo: UserInfo = JSON.parse(userInfoStorage);
      this.userId = userInfo.id;
    }

    this.wishList = new wishList();
    this.shoppingCart = new ShoppingCart();
    this.productCompare = new ProductCompare();
  }

  AddToWishList(product: Product) {

    this.wishList.userId = this.userId;
    this.wishList.product = product;
    this.wishList.date = new Date();

    this.wishListService.IsExistProductInWishlist(this.userId, product.id).then(result => {
      if (result.length === 0) {
        this.wishListService.addToWishList(this.wishList).then(result2 => {
          this.wishListService.addEvent.emit(1);
        });
      }
    });
  }

  AddToShoppingCart(product: Product) {
    this.disabledAddToCart = true;
    this.shoppingCart.userId = this.userId;
    this.shoppingCart.product = product;
    this.shoppingCart.quantity = 1;

    this.shoppingCartService.IsExistProductInShoppingCart(this.userId, product.id).then(result => {
      if (result.length == 0) {
        this.shoppingCartService.addToShoppingCart(this.shoppingCart).then(result2 => {
          this.shoppingCartService.addEvent.emit(1);
          this.disabledAddToCart = false;
          // console.log(result2);
        });
      }
      else {
        this.shoppingCartService.getShoppingCartByUserIdAndProductId(this.userId, product.id).then(result4 => {
          this.shoppingCart.id = result4[0].id;
          this.shoppingCart.quantity += result4[0].quantity;

          this.shoppingCartService.UpdateShoppingCart(this.shoppingCart).then(result3 => {
            this.disabledAddToCart = false;
            // console.log(result3);

          });

        });
      }
    });

  }

  AddToProductCompare(product: Product) {
    this.productCompare.userId = this.userId;
    this.productCompare.product = product;


    //validation for comparelist 1.maximum 4 products to compare 2.compare product in same category
    this.productCompareService.getProductCompareByUserId(this.userId).then(result => {

      if (result.length == 0) {
        this.productCompareService.addToCompareList(this.productCompare).then(result2 => {
          this.router.navigate(['/productCompare', this.productCompare.userId]);
        });
      }
      else if (result.length > 0 && result.length < 4) {
        if ((result[0] as ProductCompare).product.categoryId === product.categoryId) {
          this.productCompareService.IsExistProductInCompareList(this.userId, product.id).then(result3 => {
            if (result3.length === 0) {
              this.productCompareService.addToCompareList(this.productCompare).then(result4 => {
                this.router.navigate(['/productCompare', this.productCompare.userId]);
              });
            }
            else {
              this.router.navigate(['/productCompare', this.userId]);
            }
          });
        }

        else {
          alert('product is not in the same category');

        }
      }
      else if (result.length >= 4) {
        if ((result[0] as ProductCompare).product.categoryId === product.categoryId) {
          this.productCompareService.IsExistProductInCompareList(this.userId, product.id).then(result5 => {
            if (result5.length === 0) {
              alert('you can compare maximum 4 products.');
            }
            else {
              this.router.navigate(['/productCompare', this.userId]);
            }
          });
        }
        else {
           alert('product is not in the same category');
        }
      }
    });
  }

  onNavigate(product) {
    this.router.navigate(['/products', product.id]);
  }

}
