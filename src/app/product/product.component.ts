import { Component, OnInit } from '@angular/core';
import {ProductService} from "../services/product.service";
import {Product} from "../model/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productCollection:Product[];
  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(result=>this.productCollection=result);
  }

}
