import { Component, OnInit } from '@angular/core';
import * as alertyfy from 'alertifyjs';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  loggedinUser!: string;
  constructor() { }

  ngOnInit(): void {
  }

  loggedin(){
    this.loggedinUser = localStorage.getItem('token')!;
    return this.loggedinUser;

  }
  onLogout(){
    localStorage.removeItem('token');
    alertyfy.success("Logout successfuly!");
  }
}
