import {Injectable} from '@angular/core';
import {AppUrl} from "../app-url";
import {Http} from "@angular/http";

@Injectable()
export class BrandService {
  public url = AppUrl;

  constructor(private http: Http) {
  }

  getBrands() {
    return this.http.get(this.url.brands)
      .toPromise()
      .then(res => res.json());
  }

}
