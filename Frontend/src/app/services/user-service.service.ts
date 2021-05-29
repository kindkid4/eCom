import { Injectable } from '@angular/core';
import { UserBase } from '../model/UserBase';

import * as alertyfy from 'alertifyjs';
import { Router } from '@angular/router';
import { User } from '../model/User';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  loggedinUser!: string;
  userToEdit! : User;
  Users = [];
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
  getUser(username:string){
    let UserArray = [];
    if(localStorage.getItem('Users')){
      UserArray = JSON.parse(localStorage.getItem('Users')!);
    }
    const index = UserArray.findIndex((p: { userName: any;}) => p.userName === username);
    this.Users = JSON.parse(localStorage.getItem('Users')!);
    this.userToEdit = this.Users[index];
    return this.Users[index];
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
  upUsers(){

    localStorage.setItem('Users',JSON.stringify(this.Users))
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
