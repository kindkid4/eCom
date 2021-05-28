import { Component, HostListener, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public loggedinUser!: string;
  public wasInside = true;
  public text!: String;
  constructor(public userService: UserServiceService,
    private router: Router) { }

  ngOnInit(): void {

  }



  @HostListener('click')
  clickInside() {
    console.log("clicked inside");
    this.wasInside = true;
  }

  @HostListener('document:click')
  clickout() {
    if (!this.wasInside) {
      document.getElementById("mySidenav")!.style.width = "0";
    }
    this.wasInside = false;
  }


  inLogin(loginForm: NgForm) {
    this.userService.authUser(loginForm.value);
  }

  loggedin() {
    return this.loggedinUser = this.userService.loggedin();
  }
  onLogout() {
    this.userService.onLogout();
  }
  openNav() {
    document.getElementById("mySidenav")!.style.width = "280px";
  }

  /* Set the width of the side navigation to 0 */
  closeNav() {
    document.getElementById("mySidenav")!.style.width = "0";
  }
}
