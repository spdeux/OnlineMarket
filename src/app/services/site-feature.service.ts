import {Injectable, OnInit} from '@angular/core';
import {siteFeature} from "../model/site-feature";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";

@Injectable()
export class SiteFeatureService implements OnInit {
  siteFeatures:siteFeature[];
  constructor() {

  }

  ngOnInit(): void {
    this.siteFeatures=[
      {id:1,title:"FREE SHIPPING",description:"Free shipping on order over $1000"},
      {id:2,title:"FREE RETURN",description:"Free return in 24 hour after..."},
      {id:3,title:"GIFT CARDS",description:"Give the special perfect gift"},
      {id:4,title:"REWARD POINTS",description:"Earn and spend with ease"},
    ];
  }

  getSiteFeatures():Observable<any>{
    return of(this.siteFeatures);
  }




}
