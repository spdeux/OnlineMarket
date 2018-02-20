import {Component, Input, OnInit} from '@angular/core';
import {Banner} from "../model/banner";
import {BannerService} from "../services/banner.service";
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  banners: Banner[];
  @Input() bannerState: number

  constructor(private bannerService: BannerService) {
  }

  ngOnInit() {
    this.getBannersByState();
  }

  getBannersByState() {
    this.bannerService.getBanners(this.bannerState)
      .subscribe(result => this.banners = result);
  }

}
