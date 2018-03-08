import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../model/product";
import {ActivatedRoute, Params, Router} from "@angular/router";
@Component({
  selector: 'app-product-list-view',
  templateUrl: './product-list-view.component.html',
  styleUrls: ['./product-list-view.component.css']
})
export class ProductListViewComponent implements OnInit {
  @Input() inputProducts:Product[];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onNavigate(product) {
    this.router.navigate(['/products', product.id]);
  }
}
