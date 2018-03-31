import {Injectable, OnInit} from '@angular/core';
import {Http, RequestOptions} from "@angular/http";
import {AppUrl} from "../app-url";
import {wishList} from "../model/wishList";
import {Headers} from '@angular/http';
import {EventEmitter} from '@angular/core';
import {Observable} from "rxjs/Observable";

@Injectable()
export class WishListService {
  public url = AppUrl;
  addEvent:EventEmitter<any>=new EventEmitter();


  constructor(private http: Http) {
  }

  IsExistProductInWishlist(userId: number, productId: number) {
    let url = this.url.wishlist;
    return this.http.get(url)
      .toPromise()
      .then(res => res.json().filter(w => w.userId === userId && w.product.id === productId))
      .catch(this.handleError);
  }

  getWishListByUserId(userId: number) {

    let url = this.url.wishlist;
    return this.http.get(url)
      .toPromise()
      .then(res => res.json().filter(w => w.userId === userId))
      .catch(this.handleError);
  }

  deleteFromWishList(id: number) {
    let url = this.url.wishlist + '/' + id;
    return this.http.delete(url)
      .toPromise()
      .then(res => console.log(res))
      .catch(this.handleError);
  }

  addToWishList(wishlist: wishList) {

    var headers = new Headers({'Content-Type': 'application/json'});
    var options = new RequestOptions({headers: headers});


    return this.http.post(this.url.wishlist, JSON.stringify(wishlist), options)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  handleError(error) {
    console.log(error);
  }


}
