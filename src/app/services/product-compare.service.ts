import {EventEmitter, Injectable} from '@angular/core';
import {Http, RequestOptions} from "@angular/http";
import {AppUrl} from "../app-url";
import {ProductCompare} from "../model/product-compare";
import {Headers} from '@angular/http';

@Injectable()
export class ProductCompareService {
  public url = AppUrl;
  addEvent:EventEmitter<any>=new EventEmitter();

  constructor(private http: Http) { }

  getProductCompareByUserId(userId: number) {

    let url = this.url.productsCompare;
    return this.http.get(url)
      .toPromise()
      .then(res => res.json().filter(w => w.userId === userId))
      .catch(this.handleError);
  }

  deleteFromProductCompare(id: number) {
    let url = this.url.productsCompare + '/' + id;
    return this.http.delete(url)
      .toPromise()
      .then(res => console.log(res))
      .catch(this.handleError);
  }


  IsExistProductInCompareList(userId: number, productId: number) {
    let url = this.url.productsCompare;
    return this.http.get(url)
      .toPromise()
      .then(res => res.json().filter(w => w.userId === userId && w.product.id === productId))
      .catch(this.handleError);
  }

  addToCompareList(productCompare: ProductCompare) {

    var headers = new Headers({'Content-Type': 'application/json'});
    var options = new RequestOptions({headers: headers});


    return this.http.post(this.url.productsCompare, JSON.stringify(productCompare), options)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  handleError(error) {
    console.log(error);
  }

}
