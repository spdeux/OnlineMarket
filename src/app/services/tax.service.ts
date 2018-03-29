import {Injectable} from '@angular/core';
import {AppUrl} from "../app-url";
import {Http} from "@angular/http";

@Injectable()
export class TaxService {
  public url = AppUrl;

  constructor(private http: Http) {
  }

  getTaxByStateId(sId: number) {
    return this.http.get(this.url.taxes)
      .toPromise()
      .then(res => res.json().filter(t => t.stateId == sId))
      .catch(this.handleError);
  }

  handleError(error) {
    console.log(error);
  }
}
