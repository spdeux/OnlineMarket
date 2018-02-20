import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from "../services/product.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Product} from "../model/product";
import {ProductReviewService} from "../services/product-review.service";
import {ProductThumbnailService} from "../services/product-thumbnail.service"
import {Review} from "../model/review";
import {ThumbnailImage} from "../model/thumbnailImage";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  selectedProduct: Product = new Product();
  selectedProductReview: Review[];
  selectedProductThumbnailImages: ThumbnailImage[];
  imageZoomValue:any;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private productReviewService: ProductReviewService,
              private productThumbnailService: ProductThumbnailService) {
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params: Params) => {
      if ('id' in params) {
        this.getProduct(params['id']);
        this.getProductReviews(params['id']);
        this.getProductThumbnailImages(params['id']);
      }
    });
  }

  getProduct(id: number) {
    this.productService
      .getProductById(id)
      .then((res) => {
        this.selectedProduct = res;
        this.imageZoomValue=(res as Product).img;
        console.log(this.imageZoomValue);
      });
  }

  getProductReviews(productId: number) {
    this.productReviewService
      .getReviewsByProductId(productId)
      .then((res) => {
        // console.log(res);
        this.selectedProductReview = res;
      })
  }


  getProductThumbnailImages(productId: number) {
    this.productThumbnailService
      .getThumbnailImagesByProductId(productId)
      .then((res) => {
        this.selectedProductThumbnailImages = res;
      })
  }
}
