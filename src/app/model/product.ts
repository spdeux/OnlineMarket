import {Category} from "../model/category";
import {AvailableOptions} from "./availableOptions";
import {Brand} from "./brand";

export class Product {
  public id: number;
  public code:string;
  public name: string;
  public oldPrice: number;
  public newPrice: number;
  public discount:number;
  public rate:number;
  public img:string;
  public categoryId:number;
  public rewardPoints:number;
  public available:string;
  public tax:number;
  public availableOptions:AvailableOptions;
  public brand :Brand;
}
