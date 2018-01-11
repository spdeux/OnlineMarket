import { Component, OnInit,AfterContentInit  } from '@angular/core';
import {FeatureService} from "../services/feature.service";
import {Feature} from "../model/feature";
import { NgxCarousel } from 'ngx-carousel';
declare var $ :any;
var $screensize = $(window).width();
@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit , AfterContentInit {

  ngAfterContentInit() {

  }

  collectionProducts: Feature[];

  constructor(private featureService: FeatureService) {
  }

  public carouselTileItems: Array<any>;
  public carouselTile: any;

  ngOnInit() {
    this.carouselTileItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  this.carouselTile = {
  grid: {xs: 2, sm: 3, md: 3, lg: 5, all: 0},
    slide: 1,
    speed: 400,
    interval: 4000,
    point: {
      visible: true,
      pointStyles: `
          .ngxcarouselPoint {
            list-style-type: none;
            text-align: center;
            padding: 12px;
            margin: 0;
            white-space: nowrap;
            overflow: auto;
            position: absolute;
            width: 100%;
            bottom: 20px;
            left: 0;
            box-sizing: border-box;
          }
          .ngxcarouselPoint li {
            display: inline-block;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.55);
            padding: 5px;
            margin: 0 3px;
            transition: .4s ease all;
          }
          .ngxcarouselPoint li.active {
              background: white;
              width: 10px;
          }
        `
    },
    load: 2,
    loop: true,
    touch: true
  }



     this.featureService.getProducts().subscribe(result=>this.collectionProducts=result);
  }
  public carouselTileLoad(evt: any) {

    const len = this.carouselTileItems.length
    if (len <= 30) {
      for (let i = len; i < len + 10; i++) {
        this.carouselTileItems.push(i);
      }
    }

  }

}
