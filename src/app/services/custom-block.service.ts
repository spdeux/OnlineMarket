import {Injectable} from '@angular/core';
import {AppUrl} from "../app-url";
import {Http} from "@angular/http";

@Injectable()
export class CustomBlockService {
  public url = AppUrl;

  constructor(private http: Http) {
  }

  getCustomBlocks() {
    return this.http.get(this.url.customBlocks)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  handleError(error) {
    console.log(error);
  }

}
