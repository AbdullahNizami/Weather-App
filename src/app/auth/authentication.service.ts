import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';
import { environment } from 'src/environments/environment';
import { async } from 'q';
import { SignupComponent } from '../admin/signup/signup.component';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  admin: {
    _id: '';
    name: '';
    email: '';
    password: '';
    status: '';
  }


  constructor(public httpClient: HttpClient, public router: Router, public activatedroute: ActivatedRoute) { }
  

  async login(f)  {
      // console.log(f);
      
    let response= await this.httpClient.post(`${environment.apiBase}/login` , f).toPromise();
    // console.log(response);
    
    localStorage.setItem('token', `${(response as any).authToken}`);
    if((<any>response).authToken){
      this.router.navigate(['/']);
      await this.getProfile();
    }
  }
  async getProfile() {
    try {
      let token = localStorage.getItem('token')
      if (token) {
        let response = await this.httpClient.get(`${environment.apiBase}/profile?authToken=${token}`).toPromise();
        this.admin = (response as any).admin;
      }
    }
    catch (error) {
      console.log(error);
    }

  
  }
  async signup(u)
    {
      let response= await this.httpClient.post(`${environment.apiBase}/signup` , u).toPromise();
      // console.log(response);
      
      localStorage.setItem('token', `${(response as any).authToken}`);
      if((<any>response).authToken){
        this.router.navigate(['/']);
        await this.getProfile();
      }

    }
  async isloggedIn()
  {
    let body = {authToken : localStorage.getItem('token')};
    let responce = await this.httpClient.post(`${environment.apiBase}/login/check`, body).toPromise();
    localStorage.getItem('token');
    if((<any>responce).authenticated){
      await this.getProfile();
      return true
    }
    else{
      return false
    }
  }


}
