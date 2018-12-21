import { NgModule , Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
const routes: Routes=[

{
    path: 'signin',
    component: SigninComponent


},
{
  path: 'register',
  component: UserRegistrationComponent
}


]

@NgModule({
  declarations: [
    SigninComponent,
    UserRegistrationComponent
,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class AuthModule { }
