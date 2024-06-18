import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  constructor(private router: Router, private loginAuth: AuthService ) { }

  ngOnInit(): void {

    
  }
isUserValid: boolean = true;
  // goToHome(){
  //   this.router.navigateByUrl('home');
  // }

  loginSubmitted(){
    this.loginAuth.loginUser([this.loginForm.value.email, this.loginForm.value.pwd])
    .subscribe(res => {
      if(res == 'Failure'){
        this.isUserValid = false;
        alert ('Login Failed');
      }
      else{
        this.isUserValid = true;
        alert('Login Successfull');
      }
    })
  }

  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    pwd: new FormControl("", [Validators.required, Validators.maxLength(15), Validators.minLength(6)])
  });

  get Email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }
  
  get PWD(): FormControl {
    return this.loginForm.get('pwd') as FormControl;
  }
  
}

