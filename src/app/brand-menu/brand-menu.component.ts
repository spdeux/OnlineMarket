import { Component, OnInit } from '@angular/core';
import {BrandService} from "../services/brand.service";
import {Brand} from "../model/brand";

@Component({
  selector: 'app-brand-menu',
  templateUrl: './brand-menu.component.html',
  styleUrls: ['./brand-menu.component.css']
})
export class BrandMenuComponent implements OnInit {
  brands: Brand[];
  constructor(private brandService:BrandService) { }

  ngOnInit() {
    this.getAllBrands();
  }

  getAllBrands() {
    this.brandService.getBrands().then(result => {
      this.brands = result;
    });
  }

}
