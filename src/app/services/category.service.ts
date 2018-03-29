import {Injectable} from '@angular/core';
import {Category} from "../model/category";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
  import {AppUrl} from "../app-url";
import {Http} from "@angular/http";

@Injectable()
export class CategoryService {
  categories: Category[];
  public url = AppUrl;

  constructor(private http: Http) {
  }

  getCategories() {
    return this.http.get(this.url.categories)
      .toPromise()
      .then(res => res.json());
  }

  getCategoriesByParentId(parentId: number) {
    let url = this.url.categories + '/?parentId=' + parentId;
    return this.http.get(url)
      .toPromise()
      .then(res => res.json());
  }

  getCategoryById(categoryId: number){
    let url = this.url.categories + '/' + categoryId;
    return this.http.get(url)
      .toPromise()
      .then(res => res.json());
  }

}
