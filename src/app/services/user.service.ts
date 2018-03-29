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

  getUserById(id: number) {
    return this.http.get(this.url.users)
      .toPromise()
      .then(res => res.json().filter(u => u.id == id))
      .catch(this.handleError);
  }

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
