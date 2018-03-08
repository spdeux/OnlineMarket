import {Component, Input, OnInit} from '@angular/core';
import {Category} from "../model/category";
import {CategoryService} from "../services/category.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-category-menu-leftside',
  templateUrl: './category-menu-leftside.component.html',
  styleUrls: ['./category-menu-leftside.component.css']
})
export class CategoryMenuLeftsideComponent implements OnInit {

  @Input() inputParentId: number;

  categories: Category[];
  isActive: boolean = false;
  subCategories: Category[];
  selectedRow: Number;
  setClickedRow: Function;
  subcatId = -1;
  catid = -1;

  constructor(private categoryService: CategoryService,
              private router: Router) {

    this.setClickedRow = function (index, catId) {
      if (this.selectedRow == index) {
        //collapse Parent
        this.selectedRow = -1;
        this.isActive = false;
        return;
      }

      this.selectedRow = index;
      this.loadSubcategories(catId);
      this.subcatId = catId;
    }

  }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().then(result => {
      this.categories = result;
    });
  }

  loadSubcategories(categoryId: number) {
    this.isActive = true;
    this.subCategories = this.categories.filter(x => x.parentId == categoryId);
  }

  hasChildern(categoryId: number) {
    if (!this.categories)
      return false;

    var result = this.categories.filter(x => x.parentId == categoryId);
    return result && result.length > 0 ? true : false;
  }

  onNavigate(catId) {
    this.router.navigate(['/categories', catId]);
  }

}
