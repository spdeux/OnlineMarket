import { Injectable } from '@angular/core';
import {Slide} from "../model/slide";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";

@Injectable()
export class SlideService {
  slides: Slide[];
  constructor() {

    this.slides = [
      {id: 1, src: "../assets/image/slider/banner-1.jpg", alt: "banner1"},
      {id: 2, src: "../assets/image/slider/banner-2.jpg", alt: "banner2"},
      {id: 3, src: "../assets/image/slider/banner-3.jpg", alt: "banner3"}
    ]
  }

  getSlides():Observable<any>{
    return of(this.slides);
  }

}
