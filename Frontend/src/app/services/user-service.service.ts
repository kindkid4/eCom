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
  userToEdit!: User;
  Users = [];
  constructor(private router: Router,) { }

  addUser(user: User) {
    let users = [];
    if (localStorage.getItem('Users')) {
      users = JSON.parse(localStorage.getItem('Users')!);
      users = [user, ...users];
    }
    else {
      users = [user];
    }
    localStorage.setItem('Users', JSON.stringify(users));
  }
  getUser(email: string) {
    let UserArray = [];
    if (localStorage.getItem('Users')) {
      UserArray = JSON.parse(localStorage.getItem('Users')!);
    }
    const index = UserArray.findIndex((p: { email: any; }) => p.email === email);
    this.Users = JSON.parse(localStorage.getItem('Users')!);
    this.userToEdit = this.Users[index];
    return this.Users[index];
  }

  authUser(user: any) {
    let UserArray = [];
    if (localStorage.getItem('Users')) {
      UserArray = JSON.parse(localStorage.getItem('Users')!);
    }
    const token = UserArray.find((p: { email: any; password: any; }) => p.email === user.email && p.password === user.password);

    if (token) {
      localStorage.setItem('token', token.email);
      this.router.navigate(['/user/profile/1']);

      alertyfy.success("Login reusit!");
      return true;
    } else {
      alertyfy.error('User sau parola gresita!')
      return false;
    }
  }
  reload() {
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }
  upUsers() {
    localStorage.setItem('token', this.userToEdit.email);
    localStorage.setItem('Users', JSON.stringify(this.Users))
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
