import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';
import { environment } from 'src/environments/environment';

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
      
    let response= await this.httpClient.post(`${environment.apiBase}/admin/login` , f).toPromise();
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
        let response = await this.httpClient.get(`${environment.apiBase}/admin/profile?authToken=${token}`).toPromise();
        this.admin = (response as any).admin;
      }
    }
    catch (error) {
      console.log(error);
    }
  }
  
}
