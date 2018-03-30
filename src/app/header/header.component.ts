import {Component, OnInit} from '@angular/core';
import {WishListService} from "../services/wish-list.service";
import {ShoppingCartService} from "../services/shopping-cart.service";
import {UserInfoService} from "../services/user-info.service";
import {UserInfo} from "../model/userInfo";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  wishListCount: number = 0;
  shoppingCartCount = 0
  userInfo: UserInfo;

  constructor(private wishListService: WishListService,
              private shoppingCartService: ShoppingCartService,
              private userInfoService: UserInfoService) {
  }

  ngOnInit() {
    this.wishListService.addEvent.subscribe(result => {
      this.wishListCount += result;
    });

    this.shoppingCartService.addEvent.subscribe(result => {
      this.shoppingCartCount += result;
    });

    this.userInfoService.loginEvent.subscribe(result => {

      // console.log(result);
      if (result)
        this.userInfo = result;
      else
        this.userInfo = null;
    });


  }


}
