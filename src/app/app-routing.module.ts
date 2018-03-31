import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {HomeComponent} from "./home/home.component";
import {ProductCategoryComponent} from "./product-category/product-category.component";
import {WishListComponent} from "./wish-list/wish-list.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {ProductCompareComponent} from "./product-compare/product-compare.component";


const routes: Routes = [

  // {path: 'products', children: [
  //   {path: '', component: ShoppingCartComponent},
  //   {path: ':id', component: ProductDetailComponent}
  // ]},

  {path: 'products/:id', component: ProductDetailComponent},
  {path: 'home', component: HomeComponent},
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {path: 'categories/:id', component: ProductCategoryComponent},
  {path: 'wishlist/:userId', component: WishListComponent},
  {path: 'shoppingCart/:userId', component: ShoppingCartComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'productCompare/:userId', component: ProductCompareComponent},
  {path: '**', component: NotFoundComponent}
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
