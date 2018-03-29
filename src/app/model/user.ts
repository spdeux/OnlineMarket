import {Address} from "./address";
export class User {
  public id: number;
  public guid:string;
  public firstname: string;
  public lastname: string;
  public email: string;
  public telephone: string;
  public fax: string;
  public username: string;
  public password: string;
  public passwordConfirm: string;
  public address: Address;
  public isSubscribe: boolean;
}
