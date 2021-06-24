import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  constructor(
    private userService: UserServiceService,
    private router: Router,
    private route:ActivatedRoute,
    ) { }
    reg = '';
  ngOnInit(): void {
    this.reg = this.route.snapshot.params['category'];
  }
  reload() {
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }

  onLogin(loginForm: NgForm) {
    if(this.userService.authUser(loginForm.value))
      this.reload();
    else
      return
  }
}
