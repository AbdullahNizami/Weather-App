import { Injectable } from '@angular/core';
import { async } from '@angular/core/testing';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CitiesweatherService {

  constructor(public httpClient: HttpClient) { }

  async searchCityWeather(city){

    let responce = await this.httpClient.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=
    ${city}&APPID=a1f2d85f6babd3bf7afd83350bc5f2a6&units=imperial&cnt=7`).toPromise();
    
    return responce;
  
    }
    
}
