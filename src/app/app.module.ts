import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import {ProductService} from "./services/product.service";
import { FeaturesComponent } from './features/features.component';
import {FeatureService} from "./services/feature.service";
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
import { BannerComponent } from './banner/banner.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    FeaturesComponent,
    FeaturesComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxCarouselModule
  ],
  providers: [
    ProductService,
    FeatureService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
