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
   openNav() {
    document.getElementById("mySidenav")!.style.width = "250px";
}

/* Set the width of the side navigation to 0 */
 closeNav() {
    document.getElementById("mySidenav")!.style.width = "0";
}
}
