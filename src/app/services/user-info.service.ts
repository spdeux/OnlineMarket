import {EventEmitter, Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {UserInfo} from "../model/userInfo";
import {AppUrl} from "../app-url";

@Injectable()
export class UserInfoService {
  public url = AppUrl;
  loginEvent:EventEmitter<any>=new EventEmitter();

  constructor(private http: Http) {
  }

  createUserInfo(userInfo: UserInfo) {
    return this.http.post(this.url.usersInfo, JSON.stringify(userInfo))
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  handleError(error) {
    console.log(error);
  }

}
