import {Component, OnInit} from '@angular/core';
import {User} from "../model/user";
import {StateService} from "../services/state.service";
import {Country} from "../model/country";
import {State} from "../model/state";
import {CountryService} from "../services/country.service";
import {UserService} from "../services/user.service";
import {Address} from "../model/address";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User;
  countries: Country[];
  states: State[];
  selectedCountryId: number = 0;


  constructor(private router: Router,
              private countryService: CountryService,
              private stateService: StateService,
              private userService: UserService) {

  }

  ngOnInit() {
    this.user = new User();
    this.user.address = new Address();
    this.getCountries();
    this.getStatesByCountryId(this.selectedCountryId);
  }

  submitUserForm() {
    this.user.username=this.user.email;

    this.userService.createUser(this.user).then(result => {
      this.router.navigate(['/login']);
      console.log(result);
    });
  }


  getCountries() {
    this.countryService.getCountries()
      .then(result => {
        this.countries = result;
      });
  }

  getStatesByCountryId(countryId) {
    this.stateService.getStatesByCountryId(countryId).then(result => {
      this.states = result;
    });
  }

  onChangeCountry(countryId) {
    this.getStatesByCountryId(countryId);
  }

}
