import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
import {Feature} from "../model/feature";
@Injectable()
export class FeatureService {
  featureCollection:Feature[];
  constructor() {
    this.featureCollection=[
      {id:1,image:"../assets/image/product/apple_cinema_30-200x200.jpg",name:"product1",priceNew:12000,priceOld:13000,saving:50},
      {id:1,image:"../assets/image/product/samsung_tab_1-200x200.jpg",name:"product2",priceNew:12000,priceOld:13000,saving:15},
      {id:1,image:"../assets/image/product/sony_vaio_1-200x200.jpg",name:"product3",priceNew:12000,priceOld:13000,saving:null},
      {id:1,image:"../assets/image/product/macbook_1-200x200.jpg",name:"product4",priceNew:14000,priceOld:33000,saving:23},
      {id:1,image:"../assets/image/product/iphone_1-200x200.jpg",name:"product5",priceNew:12000,priceOld:13000,saving:null},
      {id:1,image:"../assets/image/product/canon_eos_5d_1-200x200.jpg",name:"product6",priceNew:12000,priceOld:13000,saving:5},
    ]
  }
  getProducts():Observable<any>{
    return of(this.featureCollection);
  }
}
