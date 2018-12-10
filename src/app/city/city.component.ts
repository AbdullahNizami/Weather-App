import { Component, OnInit } from '@angular/core';
import { NgForm}  from '@angular/forms';
import { WeatherService } from '../weather-ui/weather.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  city = {
    name: '',
    country: ''

}
slug : any;

list = [];

  user: any;
constructor(private weatherservice: WeatherService , public activatedRoute : ActivatedRoute) { }

   ngOnInit() {
     this.activatedRoute.params.subscribe(params => {
        this.slug = params.slug;
        this.getCityWeather(this.slug)
     })

     console.log(this.slug);
  }
  async getCityWeather(searchForm : NgForm) {
    //let city = searchForm.value.city
    let city=this.slug
    try {
      let response = await this.weatherservice.searchCityWeather(city);
      this.city = (response as any).city;
      this.list = (response as any).list;
      console.log(this.list);
  
    }
    catch (error) {
      console.log(error);
    }
  }
  
  onSubmit(form: NgForm){
    console.log(form);
  }
  
  }
  





 