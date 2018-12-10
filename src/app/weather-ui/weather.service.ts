import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(public httpClient: HttpClient) { }

  async searchCityWeather(city){
    let response = await this.httpClient.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&APPID=a1f2d85f6babd3bf7afd83350bc5f2a6&units=imperial&cnt=7`).toPromise();
    return response;
  }
}
