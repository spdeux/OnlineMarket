import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {HomeComponent} from "./home/home.component";
import {ProductCategoryComponent} from "./product-category/product-category.component";


const routes: Routes = [

  // {path: 'products', children: [
  //   {path: '', component: ShoppingCartComponent},
  //   {path: ':id', component: ProductDetailComponent}
  // ]},

  {path: 'shopping', component: ShoppingCartComponent},
  {path: 'products/:id', component: ProductDetailComponent},
  {path: 'home', component: HomeComponent},
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {path:'categories/:id',component:ProductCategoryComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),


  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
