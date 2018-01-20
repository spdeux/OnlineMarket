import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../model/product";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productCollection: Product[];
  @Input() inputCategoryId:number;
  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService
      .getProductByCategoryId(this.inputCategoryId)
      .then(result => {
        console.log(result)
        this.productCollection = result});
  }

}
