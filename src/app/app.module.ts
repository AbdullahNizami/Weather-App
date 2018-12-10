import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClient , HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { UserInterfaceComponent } from './user-interface/user-interface.component';
import { CitiesweatherService } from './citiesweather.service';

@NgModule({
  declarations: [
    AppComponent,
    UserInterfaceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
