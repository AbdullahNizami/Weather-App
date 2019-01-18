import { NgModule , Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { ProtectedPageComponent } from './protected-page/protected-page.component';
import { AuthGuard } from './auth.guard';
const routes: Routes=[

{
    path: 'signin',
    component: SigninComponent


},
{
  path: 'register',
  component: UserRegistrationComponent
},
{
  path: 'feedback',
  component: ProtectedPageComponent,
  canActivate: [AuthGuard]

}


]

@NgModule({
  declarations: [
    SigninComponent,
    UserRegistrationComponent,
    ProtectedPageComponent
,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class AuthModule { }
