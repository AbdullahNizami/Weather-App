import { Component, OnInit } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { async } from '@angular/core/testing';
@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  model:any = {}
  constructor(public authenticationservice: AuthenticationService) { }

  ngOnInit() {
  }


  // onSubmit() {
  //  console.log("submitted");

   
    
  // }
  
  async signup(f: NgForm)
  {
   if(f.valid){

    let body= f.value;
    console.log(body);
    
    try{

      let responce= this.authenticationservice.signup(body) as any;
      console.log(responce);
      
      

      } catch(error)  { 

        console.log(error);
        
    }
   }
    
  }

}
