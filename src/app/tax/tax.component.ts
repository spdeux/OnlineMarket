import {Component, Input, OnInit} from '@angular/core';
import {CountryService} from "../services/country.service";
import {StateService} from "../services/state.service";
import {Country} from "../model/country";
import {State} from "../model/state";
import {TaxService} from "../services/tax.service";
import {ShoppingCartService} from "../services/shopping-cart.service";

@Component({
  selector: 'app-tax',
  templateUrl: './tax.component.html',
  styleUrls: ['./tax.component.css']
})
export class TaxComponent implements OnInit {
  @Input() inputTotal: number = 0;
  countries: Country[];
  states: State[];
  selectedCountryId: number = 0;
  selectedStateId: number = 0;
  selectedTax = 0.00;

  constructor(private countryService: CountryService,
              private stateService: StateService,
              private taxService: TaxService,
              private shoppingCartService: ShoppingCartService) {
  }

  ngOnInit() {
    this.getCountries();
    this.getStatesByCountryId(this.selectedCountryId);
    this.shoppingCartService.sumEvent.subscribe(result=>{
      this.inputTotal=result;
    });
  }

  getCountries() {
    this.countryService.getCountries()
      .then(result => {
        this.countries = result;
      });
  }

  getStatesByCountryId(countryId: number) {
    this.stateService.getStatesByCountryId(countryId).then(result => {
      this.states = result;
    })
  }

  getTaxByStateId(stateId: number) {

    this.taxService.getTaxByStateId(stateId).then(result => {
      console.log(result);
      if (result)
        this.selectedTax = result[0].amount;
    });
  }

  onChangeCountry(countryId) {
    this.getStatesByCountryId(countryId);
  }

  onChangeState(stateId) {
    // console.log(stateId);
    this.getTaxByStateId(stateId);
  }

}
