import {Component, Input, OnInit} from '@angular/core';
import {CategoryService} from "../services/category.service";
import {Category} from "../model/category";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Product} from "../model/product";
import {ProductService} from "../services/product.service";
import {PlatformLocation} from "@angular/common";
import * as _ from 'lodash';


@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {
  @Input() parentId: number = 0;

  categories: Category[];
  products: Product[];
  parentCategory=Category;

  showOptions = [2, 3, 5, 10, 15, 20];
  showOptionSelected: any = this.showOptions[3];

  sortOptions = [
    {id: -1, name: 'Default'},
    {id: 1, name: 'Name (A - Z)'},
    {id: 2, name: 'Name (Z - A)'},
    {id: 3, name: 'Price (Low &gt; High)'},
    {id: 4, name: 'Price (High &gt; Low)'},
    {id: 5, name: 'Rating (Highest)'},
    {id: 6, name: 'Rating (Lowest)'}];

  sortOptionSelected: any = this.sortOptions[0].id;

  loading = false;
  total = 0;
  page = 1;
  limit = this.showOptionSelected;
  isGridView: boolean=true;

  constructor(private  categoryService: CategoryService,
              private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private location: PlatformLocation) {

    location.onPopState(() => {
      this.routerManagement();
    });
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params: Params) => {
      if ('id' in params) {
        this.parentId = params['id'];

        this.getCategoriesByParentId();
        this.getProductByCategoryIds();
        this.getParentCategory();
      }
    });
  }

  //navigation
  navigate(selectedOrderId,displayCount){
    this.router.navigate(['/categories/' + this.parentId], {
      queryParams: {
        order: selectedOrderId,
        display: displayCount,
        view:this.isGridView?'grid':'list'
      }
    });
  }


  //router
  routerManagement() {

     this.activatedRoute.queryParams.subscribe((params: Params) => {

       if('order' in params){
         this.sortOptionSelected = params['order'];
         this.onSortOptionsSelected(this.sortOptionSelected);
       }

       if('display' in params){
         this.limit=params['display'];
         this.showOptionSelected=this.limit;
         this.onShowOptionsSelected(this.showOptionSelected);
       }

       if('view' in params){
         this.ActivateView(params['view']);
       }

     });
  }

  //general methods
  getCategoriesByParentId() {
    this.categoryService.getCategoriesByParentId(this.parentId).then(result => {
      this.categories = result
    });
  }

  getProductByCategoryIds() {
    this.getNSelectedSortedProducts(this.sortOptionSelected, this.limit);
  }

  //pagination methods
  goToPage(n: number): void {
    this.page = n;
    this.getProductByCategoryIds();
  }

  onNext(): void {
    this.page++;
    this.getProductByCategoryIds();
  }

  onPrev(): void {
    this.page--;
    this.getProductByCategoryIds();
  }

  getMin(): number {
    var min = ((this.limit * this.page) - this.limit) + 1;

    return min;
  }

  getMax(): number {
    let max = this.limit * this.page;
    if (max > this.total) {
      max = this.total;
    }
    return max;
  }

  //display method
  onShowOptionsSelected(event) {
    this.limit = event;
    this.page = 1;
    this.getProductByCategoryIds();
  }

  //sort method
  onSortOptionsSelected(event) {
    this.sortOptionSelected=event;
    this.getNSelectedSortedProducts(event, this.limit);
  }

  getNSelectedSortedProducts(selectedOrderId, displayCount) {
    // this.router.navigate(['/categories/' + this.parentId], {
    //   queryParams: {
    //     order: selectedOrderId,
    //     display: displayCount,
    //     view:this.isGridView?'grid':'list'
    //   }
    // });

    this.navigate(selectedOrderId,displayCount);

    this.loading = true;
    this.categoryService.getCategoriesByParentId(this.parentId).then(result => {
      this.categories = result;

      if (this.categories.length > 0) {

        let categoryIds: number[] = this.categories.map(c => c.id);
        this.productService.getSortedProduct(categoryIds, selectedOrderId).then(result2 => {
          this.products = result2;
          this.total = this.products.length;
          this.products = this.products.slice(this.getMin() - 1, this.getMax());
          this.loading = false;
        });
      }

      else {

        this.categoryService.getCategoryById(this.parentId).then(result3 => {

          this.categories = result3;
          let categoryIds: number[] = this.categories.map(c => c.id);
          this.productService.getSortedProduct(categoryIds, selectedOrderId).then(result2 => {
            this.products = result2;
            this.total = this.products.length;
            this.products = this.products.slice(this.getMin() - 1, this.getMax());
            this.loading = false;

          });

        });
      }


    });
  }

  onNavigate(product) {
    this.router.navigate(['/products', product.id]);
  }

  ActivateView(view){
    if(view=='grid'){
      this.isGridView=true;
    }
    else if(view=='list'){
      this.isGridView=false;
    }

    this.navigate( this.sortOptionSelected,this.limit);
  }

  getParentCategory(){
    this.categoryService.getCategoryById(this.parentId).then(result=>{
      this.parentCategory=result;
    })
  }
}

