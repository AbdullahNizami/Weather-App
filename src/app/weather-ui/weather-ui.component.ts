import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather-ui',
  templateUrl: './weather-ui.component.html',
  styleUrls: ['./weather-ui.component.css']
})
export class WeatherUIComponent implements OnInit {
  city = {
    name: '',
    country: ''
  }

  list = [];

  user: any;
  // city: '';
  // cityData= {
  //   name: null,
  //   country :null,
  // };
  // weatherArray = [];
  constructor(private weatherService: WeatherService ,  public router : Router) {   }

  ngOnInit() {
    
    
  }
//   async searchCity(seachForm: NgForm) 
//   {
    
//   //   try {
//   //     this.city = seachForm.value.city;
//   //     let response = await (this.weatherService.searchCityWeather(this.city) as any);
//   //     // console.log(response);
//   //     this.cityData = response.city;
//   //     // console.log(this.cityData);
//   //     this.weatherArray = response.list;
//   //     // console.log(this.weatherArray);
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // }
async getCityWeather(searchForm : NgForm) {
  let city = searchForm.value.city
  
  try {
    let response = await this.weatherService.searchCityWeather(city);
    this.city = (response as any).city;
    this.list = (response as any).list;
    console.log(this.list);

  }
  catch (error) {
    console.log(error);
  }
}

searchCity(form: NgForm){
  let city  = form.value.city
  this.router.navigate([`${city}`]);
}

logout(){
  localStorage.removeItem('token');
  this.router.navigate(['/signin']);
}

}
