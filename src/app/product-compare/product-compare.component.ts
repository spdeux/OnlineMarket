import {Component, OnInit} from '@angular/core';
import {ProductCompareService} from "../services/product-compare.service";
import {ShoppingCart} from "../model/shopping-cart";
import {UserInfo} from "../model/userInfo";
import {ShoppingCartService} from "../services/shopping-cart.service";
import {Router} from "@angular/router";
import {Product} from "../model/product";

@Component({
  selector: 'app-product-compare',
  templateUrl: './product-compare.component.html',
  styleUrls: ['./product-compare.component.css']
})
export class ProductCompareComponent implements OnInit {
  productCompareCollection = [];
  userId: number = 1;
  shoppingCart: ShoppingCart;
  disabledAddToCart: boolean = false;

  constructor(private productCompareService: ProductCompareService,
              private shoppingCartService: ShoppingCartService,
              private router: Router) {
  }

  ngOnInit() {

    let userInfoStorage = localStorage.getItem("userInfo");
    if (userInfoStorage) {
      let userInfo: UserInfo = JSON.parse(userInfoStorage);
      this.userId = userInfo.id;
    }

    this.getProductCompareByUser(this.userId);
    this.shoppingCart = new ShoppingCart();
  }

  getProductCompareByUser(userId: number) {
    return this.productCompareService.getProductCompareByUserId(userId).then(result => {
      // console.log(result);
      this.productCompareCollection = result;
    });
  }

  onDelete(id: number) {
    this.productCompareService.deleteFromProductCompare(id).then(result => {
      this.getProductCompareByUser(this.userId).then(result2 => {
        this.productCompareService.addEvent.emit(-1);
        // console.log(result2);
      });
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
        });
      }
      else {
        this.shoppingCartService.getShoppingCartByUserIdAndProductId(this.userId, product.id).then(result4 => {
          this.shoppingCart.id = result4[0].id;
          this.shoppingCart.quantity += result4[0].quantity;

          this.shoppingCartService.UpdateShoppingCart(this.shoppingCart).then(result3 => {
            this.disabledAddToCart = false;
          });

        });
      }
    });
  }

  onNavigate(product) {
    this.router.navigate(['/products', product.id]);
  }


}
