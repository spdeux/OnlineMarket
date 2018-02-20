import {Injectable} from "@angular/core";
import {AppUrl} from "../app-url";
import {Http} from "@angular/http";
import {ProductTypes} from "../model/Enumeration"
import * as _ from 'lodash';

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
    if (term) {
      let url = this.url.products + '/' + '?name=^' + term;
      return this.http.get(url)
        .toPromise()
        .then(res => res.json());
    }
    else {
      let url = this.url.products + '/' + '?name=__' + term;
      return this.http.get(url)
        .toPromise()
        .then(res => res.json());
    }

  }

  getProductByCategoryId(categoryId: number) {
    let url = this.url.products + '/' + '?categoryId=' + categoryId;
    return this.http.get(url)
      .toPromise()
      .then(res => res.json());
  }

  getProductById(id: number) {
    let url = this.url.products + '/' + id;

    return this.http.get(url)
      .toPromise()
      .then(res => res.json());
  }

  getProductByType(productType: ProductTypes) {

    if (productType == 2) {
      return this.getLatestProducts().then(res => res);
    }
    else if (productType == 1) {
      return this.getSpecialProducts().then(res => res);
    }
    else if (productType == 0) {
      return this.getBesSellerProducts().then(res => res);
    }
    return null

    // switch (productType) {
    //   case ProductTypes.Latest:
    //   return   this.getLatestProducts().then(res=>res.json());
    //   case ProductTypes.Special:
    //     return this.getSpecialProducts().then(res=>res.json());
    //   case ProductTypes.BestSeller:
    //     return this.getBesSellerProducts().then(res=>res.json());
    //   default:
    //     return null;
    // }
  }

  getLatestProducts() {
    return this.http.get(this.url.products)
      .toPromise()
      .then(res => _.take(_.orderBy(res.json(), 'id').reverse(), 6));
  }

  getSpecialProducts() {
    return this.http.get(this.url.products)
      .toPromise()
      .then(res => _.take(_.orderBy(res.json(), 'discount').reverse(), 6));
  }

  getBesSellerProducts() {
    return this.http.get(this.url.products)
      .toPromise()
      .then(res => _.take(_.orderBy(res.json(), 'rate').reverse(), 6));
  }

  getProductTypeTitle(productType: ProductTypes) {
    if (productType == 2)
      return 'Latest';
    else if (productType == 1)
      return 'Special';
    else if (productType == 0)
      return 'BestSeller';
  }

}
