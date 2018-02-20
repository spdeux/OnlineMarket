import {Injectable} from '@angular/core';
import {Banner} from "../model/banner";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";

@Injectable()
export class BannerService {
  banners1: Banner[];
  banners2: Banner[];

  constructor() {
    this.banners1 = [
      {
        id: 1,
        title: "Sample Banner 3",
        src: "../assets/image/banner/sample-banner-3-400x200.jpg",
        alt: "Sample Banner 3"
      },
      {id: 2, title: "Sample Banner", src: "../assets/image/banner/sample-banner-1-400x200.jpg", alt: "Sample Banner"},
      {
        id: 3,
        title: "Sample Banner 2",
        src: "../assets/image/banner/sample-banner-2-400x200.jpg",
        alt: "Sample Banner 2"
      }
    ]

    this.banners2 = [
      {
        id: 1,
        title: "2 Block Banner",
        src: "../assets/image/banner/sample-banner-4-400x150.jpg",
        alt: "2 Block Banner"
      },
      {
        id: 2,
        title: "2 Block Banner 1",
        src: "../assets/image/banner/sample-banner-5-400x150.jpg",
        alt: "2 Block Banner 1"
      },

    ]

  }

  getBanners(bannerState: number): Observable<any> {
    if (bannerState == 3)
      return of(this.banners1);

    return of(this.banners2);
  }

}
