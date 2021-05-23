import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import * as alertyfy from 'alertifyjs';
import { LoginAuthService } from 'src/app/services/login-auth.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  loggedinUser!: string;
  constructor(private loginService :LoginAuthService,
    private router: Router) { }

  ngOnInit(): void {

  }
  inLogin(loginForm: NgForm) {
    console.log(loginForm.value);
    const token = this.loginService.authUser(loginForm.value);
    if (token) {
      localStorage.setItem('token', token.userName);
      alertyfy.success("Login reusit!");
      this.router.navigate(['/register']);
    } else {
      alertyfy.error('User sau parola gresita!')
    }
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
    document.getElementById("mySidenav")!.style.width = "280px";
}

/* Set the width of the side navigation to 0 */
 closeNav() {
    document.getElementById("mySidenav")!.style.width = "0";
}
}
