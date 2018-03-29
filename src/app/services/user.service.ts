import {Injectable} from '@angular/core';
import {AppUrl} from "../app-url";
import {Http} from "@angular/http";

@Injectable()
export class UserService {
  public url = AppUrl;

  constructor(private http: Http) {
  }

  createUser(user) {
    return this.http.post(this.url.users, JSON.stringify(user))
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  //authentication
  getUserById(id: number) {
    return this.http.get(this.url.users)
      .toPromise()
      .then(res => res.json().filter(u => u.id == id))
      .catch(this.handleError);
  }

  //authorization
  getUserByIdGuid(id: number, token: string) {
    return this.http.get(this.url.users)
      .toPromise()
      .then(res => res.json().firstname(u => u.id == id && u.token == token))
      .catch(this.handleError);
  }

  //login
  getUserByUsernamePass(email: string, pass: string) {
    return this.http.get(this.url.users)
      .toPromise()
      .then(res => res.json().filter(u => (u.email == email || u.username == email) && u.password == pass))
      .catch(this.handleError);
  }

  handleError(error) {
    console.log(error);
  }

}
