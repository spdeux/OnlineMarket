import {EventEmitter, Injectable} from '@angular/core';
import {Http,RequestOptions} from "@angular/http";
import {AppUrl} from "../app-url";
import {ShoppingCart} from "../model/shopping-cart";
import {Headers} from '@angular/http';


@Injectable()
export class ShoppingCartService {
  public url = AppUrl;
  addEvent:EventEmitter<any>=new EventEmitter();
  sumEvent:EventEmitter<any>=new EventEmitter();

  constructor(private http: Http) {
  }

  getShoppingCartByUserId(userId: number) {
  let url = this.url.shoppingCart;
  return this.http.get(url)
    .toPromise()
    .then(res => res.json().filter(c => c.userId === userId))
    .catch(this.handleError);
}

  getShoppingCartByUserIdAndProductId(userId: number,productId:number) {
    let url = this.url.shoppingCart;
    return this.http.get(url)
      .toPromise()
      .then(res => res.json().filter(c => c.userId === userId && c.product.id===productId))
      .catch(this.handleError);
  }

  deleteFromShoppingCart(id:number){
    let url = this.url.shoppingCart + '/' + id;
    return this.http.delete(url)
      .toPromise()
      .then(res=>console.log(res))
      .catch(this.handleError);
  }

  UpdateShoppingCart(cart:ShoppingCart){
    let url = this.url.shoppingCart + '/' + cart.id;

    var headers = new Headers({'Content-Type': 'application/json'});
    var options = new RequestOptions({headers: headers});

    return this.http.put(url,cart,options)
      .toPromise()
      .then(res=>console.log(res))
      .catch(this.handleError);
  }

  IsExistProductInShoppingCart(userId: number, productId: number) {

    let url = this.url.shoppingCart;
    return this.http.get(url)
      .toPromise()
      .then(res => res.json().filter(w => w.userId === userId && w.product.id === productId))
      .catch(this.handleError);
  }

  addToShoppingCart(shoppingCart: ShoppingCart) {

    var headers = new Headers({'Content-Type': 'application/json'});
    var options = new RequestOptions({headers: headers});


    return this.http.post(this.url.shoppingCart, JSON.stringify(shoppingCart), options)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  handleError(error) {
    console.log(error);
  }

}
