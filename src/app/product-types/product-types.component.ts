import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from "../services/product.service";
import {Product} from "../model/product";
import {ProductTypes} from "../model/Enumeration"

@Component({
  selector: 'app-product-types',
  templateUrl: './product-types.component.html',
  styleUrls: ['./product-types.component.css']
})
export class ProductTypesComponent implements OnInit {
  @Input() productType: ProductTypes;
  products: Product[];
  productTypeTitle: string;


  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.getProductByType();
    this.getproductTypeTitle();
  }

  getProductByType() {
    this.productService
      .getProductByType(this.productType)
      .then(result => {
        this.products = result
      });
  }

  getproductTypeTitle() {
    this.productTypeTitle = this.productService.getProductTypeTitle(this.productType);
  }

}
