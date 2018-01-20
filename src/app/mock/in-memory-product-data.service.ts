import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Product} from "../model/product";

@Injectable()
export class InMemoryProductDataService implements InMemoryDbService {

  createDb() {
     let products=[
      {id:1,name:'Aspire Ultrabook Laptop',newPrice:230.00,oldPrice:241.00,discount:-5,rate:4,img:"../assets/image/product/samsung_tab_1-200x200.jpg",categories:[{id:1,name:"Electronics"}]},
      {id:2,name:'Strategies for Acquiring Your Own Laptop',newPrice:1400.00,oldPrice:1900.00,discount:26,rate:0,img:"../assets/image/product/macbook_pro_1-200x200.jpg",categories:[{id:1,name:"Electronics"}]},
      {id:3,name:'Laptop Silver black',newPrice:1142.00,oldPrice:1202.00,discount:5,rate:0,img:"../assets/image/product/macbook_air_1-200x200.jpg",categories:[{id:1,name:"Electronics"}]},
      {id:4,name:'Ideapad Yoga 13-59341124 Laptop',newPrice:2.00,oldPrice:0,discount:0,rate:4,img:"../assets/image/product/macbook_1-200x200.jpg",categories:[{id:1,name:"Electronics"}]},
      {id:5,name:'Hp Pavilion G6 2314ax Notebok Laptop',newPrice:122,oldPrice:0,discount:0,rate:0,img:"../assets/image/product/ipod_shuffle_1-200x200.jpg",categories:[{id:1,name:"Electronics"}]},
      {id:6,name:'Samsung Galaxy S4',newPrice:62.00,oldPrice:122.00,discount:50,rate:0,img:"../assets/image/product/ipod_touch_1-200x200.jpg",categories:[{id:1,name:"Electronics"}]},
      {id:7,name:'Hair Care Cream for Men',newPrice:134,oldPrice:0,discount:0,rate:5,img:"../assets/image/product/iphone_6-200x200.jpg",categories:[{id:1,name:"Electronics"}]},
      {id:8,name:'Hair Care Products',newPrice:66.80,oldPrice:90.80,discount:27,rate:1,img:"../assets/image/product/nikon_d300_5-200x200.jpg",categories:[{id:2,name:"HealthAndBeauty"}]},
      {id:9,name:'Bed Head Foxy Curls Contour Cream',newPrice:88,oldPrice:0,discount:0,rate:0,img:"../assets/image/product/nikon_d300_4-200x200.jpg",categories:[{id:2,name:"HealthAndBeauty"}]},
      {id:10,name:'Shower Gel Perfume for Women',newPrice:95.00,oldPrice:99.00,discount:0,rate:0,img:"../assets/image/product/macbook_5-200x200.jpg",categories:[{id:2,name:"HealthAndBeauty"}]},
      {id:11,name:'Perfumes for Women',newPrice:85.0,oldPrice:0,discount:0,rate:5,img:"../assets/image/product/macbook_4-200x200.jpg",categories:[{id:2,name:"HealthAndBeauty"}]},
      {id:12,name:'Make Up for Naturally Beautiful Better',newPrice:123,oldPrice:0,discount:0,rate:0,img:"../assets/image/product/macbook_3-200x200.jpg",categories:[{id:2,name:"HealthAndBeauty"}]},
      {id:13,name:'Pnina Tornai Perfume',newPrice:110,oldPrice:0,discount:0,rate:0,img:"../assets/image/product/macbook_2-200x200.jpg",categories:[{id:2,name:"HealthAndBeauty"}]}
    ]
    return {products};
  }
  constructor() { }

}
