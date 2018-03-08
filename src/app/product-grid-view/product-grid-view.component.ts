import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../model/product";
import {ActivatedRoute, Params, Router} from "@angular/router";
@Component({
  selector: 'app-product-grid-view',
  templateUrl: './product-grid-view.component.html',
  styleUrls: ['./product-grid-view.component.css']
})
export class ProductGridViewComponent implements OnInit {
@Input() inputProducts:Product[];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onNavigate(product) {
    this.router.navigate(['/products', product.id]);
  }
}
