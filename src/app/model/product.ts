import {Category} from "../model/category";

export class Product {
  public id: number;
  public name: string;
  public oldPrice: number;
  public newPrice: number;
  public discount:number;
  public rate:number;
  public img:string;
  public categories:Category[];
}
