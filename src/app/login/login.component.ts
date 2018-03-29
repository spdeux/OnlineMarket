import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {User} from "../model/user";
import {Router} from "@angular/router";
import {UserInfo} from "../model/userInfo";
import {UserInfoService} from "../services/user-info.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  userInfo: UserInfo;
  isExistUSer: boolean = true;

  constructor(private router: Router,
              private userService: UserService,
              private userInfoService: UserInfoService) {
  }

  ngOnInit() {
    this.user = new User();
  }

  submitUser() {
    this.userService.getUserByUsernamePass(this.user.email, this.user.password).then(result => {
      if (result.length > 0) {

        this.userInfo = new UserInfo();
        this.userInfo.id = this.user.id;
        this.userInfo.guid = this.user.guid;
        this.userInfo.firstname = this.user.firstname;
        this.userInfo.lastname = this.user.lastname;
        this.userInfo.expirationDate = new Date();

        this.userInfoService.createUserInfo(this.userInfo).then(result2 => {
          console.log(result2);
          window.localStorage.setItem("userInfo", JSON.stringify(this.userInfo));
          this.userInfoService.loginEvent.emit(this.userInfo)
          this.router.navigate(['/home']);
        });

      }
      else {
        this.isExistUSer = false;
      }
      console.log(result);
    });

  }

}
