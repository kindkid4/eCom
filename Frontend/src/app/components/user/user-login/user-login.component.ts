import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  constructor(
    private userService: UserServiceService) { }

  ngOnInit(): void {
  }

  onLogin(loginForm: NgForm){
    this.userService.authUser(loginForm.value);
  }
}
