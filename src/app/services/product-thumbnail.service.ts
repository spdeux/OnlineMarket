import {Injectable} from '@angular/core';
import {AppUrl} from "../app-url";
import {Http} from "@angular/http";

@Injectable()
export class ProductThumbnailService {

  public url = AppUrl;

  constructor(private http: Http) {
  }

  getThumbnailImages() {
    return this.http.get(this.url.thumbnails)
      .toPromise()
      .then(res => res.json());
  }

  getThumbnailImagesByProductId(productId: number) {
    let url = this.url.thumbnails + '/?productId=' + productId;
    return this.http.get(url)
      .toPromise()
      .then(res => res.json());
  }
}

