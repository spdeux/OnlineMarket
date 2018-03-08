import {Component, Input, OnInit} from '@angular/core';
import {Review} from "../model/review";
import {ProductReviewService} from "../services/product-review.service";

@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.css']
})
export class ProductReviewComponent implements OnInit {
  selectedProductReview: Review[];
  @Input() inputProductId:number;

  constructor(private productReviewService: ProductReviewService) { }

  ngOnInit() {
    this.getProductReviews(this.inputProductId);
  }

  getProductReviews(productId: number) {
    this.productReviewService
      .getReviewsByProductId(productId)
      .then((res) => {
        this.selectedProductReview = res;
      })
  }

}
