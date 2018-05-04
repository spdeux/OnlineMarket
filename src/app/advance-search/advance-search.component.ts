import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router,Params} from "@angular/router";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-advance-search',
  templateUrl: './advance-search.component.html',
  styleUrls: ['./advance-search.component.css'],
  animations:[
trigger('editorFly',[
state('inactive',style({
  right:'-40%'
})),
  state('active', style({
    right: 0
  })),
  transition('active => inactive', animate('200ms ease-out')),
  transition('inactive => active', animate('200ms ease-in')),
])
  ]
})
export class AdvanceSearchComponent implements OnInit {
  editorActivation: string = 'inactive';
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      if (('search' in params) && (params['search'] == 'advance')) {
        this.editorActivation = 'active';
      } else {
        this.editorActivation = 'inactive';
      }
    });
  }

}
