import {Component, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {ProductService} from "../services/product.service";
import {Product} from "../model/product";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm = new Subject
  searchResult: Product[];
  searchValue:string='';
  isShow:boolean=false;

  constructor(private productService: ProductService,
              private router: Router) {
  }

  ngOnInit() {

    this.searchTerm
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap((term: string) => this.productService.getProductSearch(term))
      .subscribe(res => {
        this.searchResult = res;
        this.isShow=true;
      })
  }

  onSearch(term: string) {
    this.searchTerm.next(term);
  }

  onNavigate(product) {
      this.router.navigate(['products',product.id]);
      this.searchValue='';
      this.isShow=false;

  }

}
