import { Component, OnInit,Input } from '@angular/core';
import {ProductService} from "../services/product.service";
import {Product} from "../model/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
@Input() inputProduct:Product;

  constructor() { }

  ngOnInit() {

  }

}
