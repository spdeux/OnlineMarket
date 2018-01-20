import {Injectable} from '@angular/core';
import {AppUrl} from "../app-url";
import {Http} from "@angular/http";


@Injectable()
export class ProductService {

  public url = AppUrl;

  constructor(private http: Http) {
  }

  getProducts() {
    return this.http.get(this.url.products)
      .toPromise()
      .then(res => res.json());

  }

  getProductSearch(term: string) {

    let url = this.url.products + '/' + 'name=/' + term+'/';

    return this.http.get(url)
      .toPromise()
      .then(res => res.json());

  }

  getProductByCategoryId(categoryId:number){
    let url=this.url.products+'/categories/?id='+categoryId;

    return this.http.get(url)
      .toPromise()
      .then(res=>res.json());
  }


}
