import { Component, HostListener, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserServiceService } from 'src/app/services/user-service.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public loggedinUser!: string;
  public wasInside = true;
  user! : User;
  public text!: String;
  ok! :boolean;
  url = '';
  constructor(public userService: UserServiceService,
    private router: Router) { }

  ngOnInit() {

    this.user = this.userService.getUser(this.userService.loggedin());
    this.url = this.userService.userToEdit.pfp;

  }

  reload() {
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }

  @HostListener('click')
  clickInside() {
    this.wasInside = true;
  }

  @HostListener('document:click')
  clickout() {
    if (!this.wasInside) {
      document.getElementById("mySidenav")!.style.width = "0";
    }
    this.wasInside = false;
  }


  onLogin(loginForm: NgForm) {
    if(this.userService.authUser(loginForm.value))
      this.reload();
    else
      return
  }

  loggedin() {
    return this.loggedinUser = this.userService.loggedin();
  }
  onLogout() {
    this.userService.onLogout();
    this.reload();
  }
  openNav() {
    document.getElementById("mySidenav")!.style.width = "280px";
  }

  /* Set the width of the side navigation to 0 */
  closeNav() {
    document.getElementById("mySidenav")!.style.width = "0";
  }
}
