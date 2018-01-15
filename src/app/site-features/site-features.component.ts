import { Component, OnInit } from '@angular/core';
import {SiteFeatureService} from "../services/site-feature.service";
import {siteFeature} from "../model/site-feature";

@Component({
  selector: 'app-site-features',
  templateUrl: './site-features.component.html',
  styleUrls: ['./site-features.component.css']
})
export class SiteFeaturesComponent implements OnInit {
  siteFeatureCollection:siteFeature[];
  constructor(private siteFeatureService:SiteFeatureService) { }

  ngOnInit() {
    this.siteFeatureService.getSiteFeatures().subscribe(result=>this.siteFeatureCollection=result);
  }

}
