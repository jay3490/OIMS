import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from '../dashboard/dashboard.component';

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
type: string = "password";
eyeIcon: string = "fa-eye-slash";
isText: boolean = false;
  // goToHome(){
  //   this.router.navigateByUrl('home');
  // }

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";

  }
  loginSubmitted(){
    // this.loginAuth.loginUser(this.loginForm.value)
    // .subscribe(res => {
    //   if(res == 'Failure'){
    //     this.isUserValid = false;
    //     alert ('Login Failed');
    //   }
    //   else{
    //     this.isUserValid = true;
    //     alert('Login Successfull');
    //   }
    // });
    // console.log(this.loginForm)
    if(this.loginForm.valid)
    {
      this.loginAuth.loginUser(this.loginForm.value)
      .subscribe({
        next:(res)=>{
          // alert(res.message);
          this.loginForm.reset();
          this.router.navigate(['dashboard'])
        },
        error:(err)=>{
          alert(err?.error.message)
        }
      })
    }
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

