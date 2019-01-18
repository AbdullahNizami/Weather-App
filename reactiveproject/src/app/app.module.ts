import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { Reactiveform1Component } from './reactiveform1/reactiveform1.component';
import { Routes, RouterModule} from '@angular/router'
import {ReactiveFormsModule} from '@angular/forms'

const routes: Routes =[
{

  path: '',
  component: Reactiveform1Component
  
}

]

@NgModule({
  declarations: [
    AppComponent,
    Reactiveform1Component
  ],
  imports: [
    BrowserModule, ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
