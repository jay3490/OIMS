import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  constructor(private router: Router, private loginAuth: AuthService ) { }

  ngOnInit(): void {

    
  }
isUserValid: boolean = false;
  // goToHome(){
  //   this.router.navigateByUrl('home');
  // }

  loginSubmitted(){
    this.loginAuth.loginUser([this.loginForm.value.EmailId, this.loginForm.value.Password])
    .subscribe(res => {
      if(res == 'Failure'){
        this.isUserValid = false;
        alert ('Login Failed');
      }
      else{
        this.isUserValid = true;
        alert('Login Successfull');
      }
    });
    // console.log(this.loginForm)
  }

  loginForm = new FormGroup({
    EmailId: new FormControl('', [Validators.required, Validators.email]),
    Password: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.minLength(6)])
  });

  get Email(): FormControl {
    return this.loginForm.get('EmailId') as FormControl;
  }
  
  get PWD(): FormControl {
    return this.loginForm.get('Password') as FormControl;
  }
  
}

