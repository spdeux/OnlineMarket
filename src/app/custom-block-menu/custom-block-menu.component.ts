import {Component, OnInit} from '@angular/core';
import {CustomBlockService} from "../services/custom-block.service";
import {CustomBlock} from "../model/customeBlock";

@Component({
  selector: 'app-custom-block-menu',
  templateUrl: './custom-block-menu.component.html',
  styleUrls: ['./custom-block-menu.component.css']
})
export class CustomBlockMenuComponent implements OnInit {
  customBlocks: CustomBlock[];

  constructor(private customBlockService: CustomBlockService) {
  }

  ngOnInit() {
    this.getAllCustomBlock();
  }

  getAllCustomBlock() {
    this.customBlockService.getCustomBlocks().then(result => {
      this.customBlocks = result;
    });
  }

}
