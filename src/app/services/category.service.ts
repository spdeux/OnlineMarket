import {Injectable} from '@angular/core';
import {Category} from "../model/category";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";

@Injectable()
export class CategoryService {
  categories: Category[];

  constructor() {

    this.categories = [{id: 1, name: "Electronics"},
                       {id: 2, name: "HealthAndBeauty"}];
  }

  getCategories():Observable<any>{
    return of(this.categories);
  }

}
