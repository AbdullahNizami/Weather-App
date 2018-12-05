import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CitiesweatherService } from '../citiesweather.service';


@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.css']
})
export class UserInterfaceComponent implements OnInit {

  city = '';
  cityData = {
    name: null,
    country: null,
  };
  weatherArray = [];

  constructor(private citiesweatherservice: CitiesweatherService) { }

  ngOnInit() {
  }
  async searchCity(searchform: NgForm) {
    try {

      this.city = searchform.value.city;
      let responce = await (this.citiesweatherservice.searchCityWeather(this.city) as any)
      this.cityData = responce.city;
      this.weatherArray = responce.list;
    }
    catch (error) {

      console.log(error);


    }
  }
}



