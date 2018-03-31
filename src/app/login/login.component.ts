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
    //step1:check to exist user
    this.userService.getUserByUsernamePass(this.user.email, this.user.password).then(result => {

      if (result.length > 0) {
        //if exist
        this.isExistUSer = true;

        let userInfoResult=result[0] as UserInfo;
        //step2:make userInfo & save it
        this.userInfo = new UserInfo();
        this.userInfo.id = userInfoResult.id;
        this.userInfo.token = userInfoResult.token;
        this.userInfo.firstname = userInfoResult.firstname;
        this.userInfo.lastname = userInfoResult.lastname;
        this.userInfo.expirationDate = new Date();

        this.userInfoService.createUserInfo(this.userInfo).then(result2 => {

         //step3:put in localstorage and announce that, then go to home page
          localStorage.setItem("userInfo", JSON.stringify(this.userInfo));
          this.userInfoService.loginEvent.emit(this.userInfo)
          this.router.navigate(['/home']);
        });

      }
      else {
        //if not exist
        this.isExistUSer = false;
      }
      // console.log(result);
    });

  }

}
