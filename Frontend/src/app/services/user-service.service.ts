import { Injectable } from '@angular/core';
import { User } from '../model/user';

import * as alertyfy from 'alertifyjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  loggedinUser!: string;

  constructor(private router :Router,) { }

  addUser(user: User){
    let users = [];
    if(localStorage.getItem('Users')){
      users = JSON.parse(localStorage.getItem('Users')!);
      users = [user, ...users];
    }
    else
    {
      users = [user];
    }
    localStorage.setItem('Users',JSON.stringify(users));
  }

  authUser(user:any){
    let UserArray = [];
    if(localStorage.getItem('Users')){
      UserArray = JSON.parse(localStorage.getItem('Users')!);
    }
    const token = UserArray.find((p: { userName: any; password: any; }) => p.userName === user.userName && p.password === user.password);
    if(token){
      localStorage.setItem('token',token.userName);
      alertyfy.success("Login reusit!");
      this.router.navigate(['/']);
    }else
    {
      alertyfy.error('User sau parola gresita!')
    }
  }

  loggedin() {
    this.loggedinUser = localStorage.getItem('token')!;
    return this.loggedinUser;
  }
  onLogout() {
    localStorage.removeItem('token');
    alertyfy.success("Logout successfuly!");
  }
}
