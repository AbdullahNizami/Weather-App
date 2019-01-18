import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { WeatherUIComponent } from './weather-ui/weather-ui.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CityComponent } from './city/city.component';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AuthModule } from './auth/auth.module';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthGuard } from './auth/auth.guard';
import { WeatherResolver } from './resolvers/weather.resolver';
import { Reactiveform1Component } from './reactiveform1/reactiveform1.component';
import {ReactiveFormsModule} from '@angular/forms';


const routes : Routes =[

  {   
    path: '',
    component: WeatherUIComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'contact-us',
    component: ContactUsComponent
  },

  {
    path: 'reactiveform',
    component: Reactiveform1Component

  },
  
  {
    path : ":slug",
    component : CityComponent,
    resolve: {cityWeather: WeatherResolver}
  },
  
  
  {
    path: '',
    loadChildren: './auth/auth.module#AuthModule'

  }
  
]

@NgModule({
  declarations: [
    AppComponent,
    WeatherUIComponent,
    CityComponent,
    ContactUsComponent,
    Reactiveform1Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AuthModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
