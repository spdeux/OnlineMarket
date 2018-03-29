import {Component, Input, OnInit, Output,EventEmitter} from '@angular/core';
import {Review} from "../model/review";
import {ProductReviewService} from "../services/product-review.service";

@Component({
  selector: 'app-product-review-form',
  templateUrl: './product-review-form.component.html',
  styleUrls: ['./product-review-form.component.css']
})
export class ProductReviewFormComponent implements OnInit {
  @Input() inputProductId: number;
  @Output() add:EventEmitter<any> = new EventEmitter();
  productReview: Review;

  constructor(private productReviewService: ProductReviewService) {
  }

  ngOnInit() {
    this.productReview = new Review();
  }

  onCreate() {

    this.productReview.productId = this.inputProductId;
    this.productReview.date = new Date().toLocaleString();

    this.productReviewService.createReview(this.productReview).then(result => {
        console.log(result);
        this.add.emit(this.productReview.productId);
        this.productReview=new Review();

      }
    )
  }

}
