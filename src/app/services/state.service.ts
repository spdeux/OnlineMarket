import {Injectable} from '@angular/core';
import {AppUrl} from "../app-url";
import {Http} from "@angular/http";

@Injectable()
export class StateService {
  public url = AppUrl;

  constructor(private http: Http) {
  }

  getStatesByCountryId(countryId: number) {
    return this.http.get(this.url.states)
      .toPromise()
      .then(res => res.json().filter(s => s.countryId == countryId))
      .catch(this.handleError);
  }

  handleError(error) {
    console.log(error);
  }


}
