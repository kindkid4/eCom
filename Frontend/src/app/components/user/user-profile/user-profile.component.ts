import { ResourceLoader, ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserServiceService } from 'src/app/services/user-service.service';
import * as alertyfy from 'alertifyjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  pagina: number = 1;
  passChange: boolean = false;
  user!: User;
  url = '';
  password = "";
  passwordConfirm = "";
  constructor(private route: ActivatedRoute, private userService: UserServiceService, private http: HttpClient, private formB: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.pagina = this.route.snapshot.params['page'];
    this.userService.getUser(localStorage.getItem('user')!).subscribe(
      (us: any) => {
        this.user = us;
        this.url = this.user.pfp!;
      }
    );
  }

  changePassword() {
    if (this.passChange)
      if (this.password != this.passwordConfirm)
        alertyfy.error('Detalii introduse incorect!');
      else {
        this.userService.upUserPassword(this.user, this.password).subscribe();
        alertyfy.success('Parola salvata!');
      }
  }
  changeProfile() {
    this.userService.upUser(this.user).subscribe();
    alertyfy.success('Date salvate!');
  }

  reload() {
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }

  passCheck() {
    if (this.passChange)
      this.passChange = false;
    else
      this.passChange = true;
  }

}
