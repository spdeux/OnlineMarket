import {AfterContentInit, Component, OnInit} from '@angular/core';
import {CategoryService} from "../services/category.service";
import {Category} from "../model/category";
import {Router} from "@angular/router";

@Component({
  selector: 'app-category-menu-top',
  templateUrl: './category-menu-top.component.html',
  styleUrls: ['./category-menu-top.component.css']
})
export class CategoryMenuTopComponent implements OnInit{

  categories:Category[];
parents:Category[];


  constructor(private categoryService:CategoryService,private router:Router) { }

  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories(){
    this.categoryService.getCategories().then(result=>{
      this.categories=result;
      this.parents=this.categories.filter(c=>c.parentId===0);


    });
  }
  onNavigate(category:Category){
    this.router.navigate(['/categories',category.id]);
  }




}
