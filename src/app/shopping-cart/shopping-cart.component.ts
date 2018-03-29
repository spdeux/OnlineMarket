import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ShoppingCartService} from "../services/shopping-cart.service";
import {Router} from "@angular/router";
import {ShoppingCart} from "../model/shopping-cart";


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  userId: number = 1;
  shoppingCartCollection = [];
  totalAmount = 0;

  constructor(private shoppingCartService: ShoppingCartService,
              private router: Router) {

  }

  ngOnInit() {
    this.getShoppingCartByUserId(this.userId);
  }

  getShoppingCartByUserId(userId: number) {
    return this.shoppingCartService.getShoppingCartByUserId(userId).then(result => {
      // console.log(result);
      this.shoppingCartCollection = result;
      this.totalAmount = this.sumShoppingCart(result);

    });
  }

  onDelete(id: number, quantity: number) {
    this.shoppingCartService.deleteFromShoppingCart(id).then(result => {
      this.getShoppingCartByUserId(this.userId).then(result2 => {
        this.shoppingCartService.addEvent.emit(-quantity);
        this.totalAmount = this.sumShoppingCart(result2);
        this.shoppingCartService.sumEvent.emit(this.totalAmount);
        // console.log(result2);

      });
    });
  }

  onUpdate(cart: ShoppingCart) {
    this.shoppingCartService.UpdateShoppingCart(cart).then(result => {
      console.log(result);
      this.getShoppingCartByUserId(this.userId).then(result2 => {
        this.totalAmount = this.sumShoppingCart(result2);
        this.shoppingCartService.sumEvent.emit(this.totalAmount);
        // console.log(result2);

      });


    });
  }

  onNavigate(product) {
    this.router.navigate(['/products', product.id]);
  }

  sumShoppingCart(cart: ShoppingCart[]) {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
      sum += (cart[i].quantity * cart[i].product.newPrice)

      return sum;
    }

  }


}
