import {Injectable} from '@angular/core';
import {AppUrl} from "../app-url";
import {Http} from "@angular/http";

@Injectable()
export class CountryService {
  public url = AppUrl;

  constructor(private http: Http) {
  }

  getCountries() {
    return this.http.get(this.url.countries)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  handleError(error) {
    console.log(error);
  }

}
