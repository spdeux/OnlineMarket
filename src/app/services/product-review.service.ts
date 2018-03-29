import {Injectable} from '@angular/core';
import {AppUrl} from "../app-url";
import {Http} from "@angular/http";

@Injectable()
export class ProductReviewService {

  public url = AppUrl;

  constructor(private http: Http) {
  }

  getReviews() {
    return this.http.get(this.url.reviews)
      .toPromise()
      .then(res => res.json());
  }

  getReviewsByProductId(productId: number) {
    let url = this.url.reviews ;//+ '/?productId=' + productId;
    return this.http.get(url)
      .toPromise()
      .then(res => res.json().filter(r=>r.productId==productId));
  }

  createReview(review){
    return this.http.post(this.url.reviews,JSON.stringify(review))
      .toPromise()
      .then(res=> res.json() )
      .catch(this.handleError);
  }

  handleError(error) {
    console.log(error);
  }

}
