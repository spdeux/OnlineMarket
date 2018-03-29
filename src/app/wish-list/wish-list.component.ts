import {Component, OnInit} from '@angular/core';
import {WishListService} from "../services/wish-list.service";
import {wishList} from "../model/wishList";
import {Router} from "@angular/router";
import {ProductService} from "../services/product.service";
import {Product} from "../model/product";
import {ShoppingCart} from "../model/shopping-cart";
import {ShoppingCartService} from "../services/shopping-cart.service";

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
  wishlistCollection = [];
  userId: number = 1;
  shoppingCart:ShoppingCart;
  disabledAddToCart:boolean=false;

  constructor(private wishListService: WishListService,
              private productService: ProductService,
              private shoppingCartService: ShoppingCartService,
              private router: Router) {
  }

  ngOnInit() {
    this.getWishListByUser(this.userId);
    this.shoppingCart=new ShoppingCart();
  }

  getWishListByUser(userId:number) {
    return this.wishListService.getWishListByUserId(userId).then(result => {
      this.wishlistCollection = result;
    });
  }

  onDelete(id: number) {
    this.wishListService.deleteFromWishList(id).then(result => {
      this.getWishListByUser(this.userId).then(result2 => {
        this.wishListService.addEvent.emit(-1);
        console.log(result2);
      });
    });
  }

  AddToShoppingCart(product: Product) {

    this.disabledAddToCart=true;
    this.shoppingCart.userId = this.userId;
    this.shoppingCart.product = product;
    this.shoppingCart.quantity = 1;

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

  onNavigate(product) {
    this.router.navigate(['/products', product.id]);
  }

}
