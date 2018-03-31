import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {ProductComponent} from './product/product.component';
import {ProductService} from "./services/product.service";
import {FeaturesComponent} from './features/features.component';
import {FeatureService} from "./services/feature.service";
import {NgxCarouselModule} from 'ngx-carousel';
import 'hammerjs';
import {BannerComponent} from './banner/banner.component';
import {SiteFeaturesComponent} from './site-features/site-features.component';
import {siteFeature} from "./model/site-feature";
import {SiteFeatureService} from "./services/site-feature.service";
import {BannerService} from "./services/banner.service";
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SearchComponent } from './search/search.component';
import { ProductsComponent } from './products/products.component';
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryProductDataService} from "./mock/in-memory-product-data.service";
import {AppRoutingModule} from "./app-routing.module";
import {APP_BASE_HREF} from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import {StarRatingModule} from "angular-star-rating";
import {ProductReviewService} from "./services/product-review.service";
import {ProductThumbnailService} from "./services/product-thumbnail.service";
import {ImageZoomModule} from "angular2-image-zoom";
import { ProductTypesComponent } from './product-types/product-types.component';
import { SlideComponent } from './slide/slide.component';
import {SlideService} from "./services/slide.service";
import { LeftSideComponent } from './left-side/left-side.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import {CategoryService} from "./services/category.service";
import { PaginationComponent } from './pagination/pagination.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductReviewComponent } from './product-review/product-review.component';
import { ProductReviewFormComponent } from './product-review-form/product-review-form.component';
import { CategoryMenuLeftsideComponent } from './category-menu-leftside/category-menu-leftside.component';
import { ProductListViewComponent } from './product-list-view/product-list-view.component';
import { ProductGridViewComponent } from './product-grid-view/product-grid-view.component';
import { WishListComponent } from './wish-list/wish-list.component';
import {WishListService} from "./services/wish-list.service";
import {ShoppingCartService} from "./services/shopping-cart.service";
import {UserService} from "./services/user.service";
import { VoucherComponent } from './voucher/voucher.component';
import { CouponComponent } from './coupon/coupon.component';
import { TaxComponent } from './tax/tax.component';
import { SubCategoryTabsComponent } from './sub-category-tabs/sub-category-tabs.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EmptyPageComponent } from './empty-page/empty-page.component';
import {CountryService} from "./services/country.service";
import {StateService} from "./services/state.service";
import {TaxService} from "./services/tax.service";
import { RegisterComponent } from './register/register.component';
import {EqualValidator} from "./equalValidator";
import { LoginComponent } from './login/login.component';
import {UserInfoService} from "./services/user-info.service";
import { ProductCompareComponent } from './product-compare/product-compare.component';
import {ProductCompareService} from "./services/product-compare.service";
// import {ToastrModule} from 'ngx-toastr';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    FeaturesComponent,
    FeaturesComponent,
    BannerComponent,
    SiteFeaturesComponent,
    ShoppingCartComponent,
    ProductDetailComponent,
    SearchComponent,
    ProductsComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductTypesComponent,
    SlideComponent,
    LeftSideComponent,
    ProductCategoryComponent,
    PaginationComponent,
    CategoriesComponent,
    ProductReviewComponent,
    ProductReviewFormComponent,
    CategoryMenuLeftsideComponent,
    ProductListViewComponent,
    ProductGridViewComponent,
    WishListComponent,
    VoucherComponent,
    CouponComponent,
    TaxComponent,
    SubCategoryTabsComponent,
    NotFoundComponent,
    EmptyPageComponent,
    RegisterComponent,
    EqualValidator,
    LoginComponent,
    ProductCompareComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxCarouselModule,
    InMemoryWebApiModule.forRoot(InMemoryProductDataService),
    StarRatingModule.forRoot(),
    AppRoutingModule,
    ImageZoomModule,
    // BrowserAnimationsModule, // required animations module
    // ToastrModule.forRoot(), // ToastrModule added

  ],
  providers: [
    ProductService,
    FeatureService,
    SiteFeatureService,
    BannerService,
    ProductReviewService,
    ProductThumbnailService,
    SlideService,
    CategoryService,
    WishListService,
    ShoppingCartService,
    UserService,
    CountryService,
    StateService,
    TaxService,
    UserInfoService,
    ProductCompareService,
    {provide:APP_BASE_HREF,useValue:'/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
