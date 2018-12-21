import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import {FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(public authenticationService: AuthenticationService) { }

  ngOnInit() {
  }
  async login(loginform : NgForm){
    if (loginform.valid){
      let body = loginform.value;      
      try {
        let responce = await this.authenticationService.login(body) as any;
      //  console.log(responce);
        

        
      } catch (error) {
        //console.log(error);        
      }
    }
  }
}

// function field_focus(field, email)
//   {
//     if(field.value == email)
//     {
//       field.value = '';
//     }
//   }

  // function field_blur(field, email)
  // {
  //   if(field.value == '')
  //   {
  //     field.value = email;
  //   }
  // }

  
// //Fade in dashboard box
// $(document).ready(function(){
//   $('.box').hide().fadeIn(1000);
//   });

// //Stop click event
// $('a').click(function(event){
//   event.preventDefault(); 
// });
