import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import * as alertyfy from 'alertifyjs';
import { LoginAuthService } from 'src/app/services/login-auth.service';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  constructor(
    private router :Router,
    private loginService : LoginAuthService) { }

  ngOnInit(): void {
  }

  onLogin(loginForm: NgForm){
    console.log(loginForm.value);
    const token = this.loginService.authUser(loginForm.value);
    if(token){
      localStorage.setItem('token',token.userName);
      alertyfy.success("Login reusit!");
      this.router.navigate(['/']);
    }else
    {
      alertyfy.error('User sau parola gresita!')
    }
  }
}
