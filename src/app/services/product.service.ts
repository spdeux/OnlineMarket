import {Injectable} from "@angular/core";
import {AppUrl} from "../app-url";
import {Http} from "@angular/http";
import {ProductTypes} from "../model/Enumeration"
import * as _ from 'lodash';
import {Product} from "../model/product";
import {Category} from "../model/category";

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

  getproductsByCategoryIds(categoryIds: number[]) {
    let products: Product[];

    return this.getProducts().then(res => {
      products = res;
      products = _.filter(products, p => _.includes(categoryIds, p.categoryId));
      return products;
    });
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

  getSortedProduct(categoryIds: number[], selectedOrderId: number) {

    let products: Product[];

    return this.getproductsByCategoryIds(categoryIds).then(res2 => {
          products = res2;
          return products = this.SortProducts(selectedOrderId, products);
        });
  }

  SortProducts(selectedOrderId: number, products: Product[]) {

    if (selectedOrderId == 1) {
      products = _.orderBy(products, 'name');
    }
    else if (selectedOrderId == 2) {
      products = _.orderBy(products, 'name').reverse();
    }
    else if (selectedOrderId == 3) {
      products = _.orderBy(products, 'newPrice');
    }
    else if (selectedOrderId == 4) {
      products = _.orderBy(products, 'newPrice').reverse();
    }
    else if (selectedOrderId == 5) {
      products = _.orderBy(products, 'rate').reverse();
    }
    else if (selectedOrderId == 6) {
      products = _.orderBy(products, 'rate');
    }
    else if (selectedOrderId == -1) {
      products = _.orderBy(products, 'id');
    }

    return products;

  }

}
