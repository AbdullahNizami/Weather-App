import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { WeatherUIComponent } from './weather-ui/weather-ui.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CityComponent } from './city/city.component';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';


const routes : Routes =[
  {   
    path: '',
    component: WeatherUIComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
},
  {
    path : ":slug",
    component : CityComponent
  }
  
]

@NgModule({
  declarations: [
    AppComponent,
    WeatherUIComponent,
    CityComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
