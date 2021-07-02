import { Injectable } from '@angular/core';
import { UserForRegister, UserForLogin } from '../model/UserBase';
import * as alertyfy from 'alertifyjs';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  loggedinUser!: string;
  userToEdit!: User;
  Users = [];
  baseUrl = environment.baseUrl;
  constructor(private router: Router, private http: HttpClient) { }

  addUser(user: UserForRegister) {
    return this.http.post(this.baseUrl +'/account/register',user)
  }

  authUser(user: UserForLogin) {
    return this.http.post(this.baseUrl + '/account/login',user);
  }

  reload() {
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }
  onLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    alertyfy.success("Logout successfuly!");
  }
}
