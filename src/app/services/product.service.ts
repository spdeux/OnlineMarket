import { Injectable } from '@angular/core';
import {Product} from "../model/product";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";

@Injectable()
export class ProductService {

  products:Product[];

  constructor() {

    this.products=[
      {id:1,name:'product1',newPrice:20,oldPrice:40},
      {id:2,name:'product2',newPrice:20,oldPrice:40},
      {id:3,name:'product3',newPrice:20,oldPrice:40},
      {id:4,name:'product4',newPrice:20,oldPrice:40},
      {id:5,name:'product5',newPrice:20,oldPrice:40},
      {id:6,name:'product6',newPrice:20,oldPrice:40}
      ]
  }

  getProducts():Observable<any>{
   return of(this.products);
  }


}
