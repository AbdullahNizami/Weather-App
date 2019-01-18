import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { WeatherService } from '../weather-ui/weather.service';

@Injectable({
    providedIn: 'root'
})
export class WeatherResolver implements Resolve<any> {

    constructor(private weatherservice: WeatherService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let cityWeather = this.weatherservice.searchCityWeather(route.params.slug);
        return cityWeather;
    }
}
