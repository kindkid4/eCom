import { ResourceLoader, ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserServiceService } from 'src/app/services/user-service.service';
import * as alertyfy from 'alertifyjs';
import { UpperCasePipe } from '@angular/common';
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
  email = "";
  mobil = 0;
  tara = "";
  judet = "";
  oras = "";
  strada = ""
  numar = 0;

  constructor(private route: ActivatedRoute, private userService: UserServiceService, private formB: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.pagina = this.route.snapshot.params['page'];
    this.user = JSON.parse(localStorage.getItem('user')!);
    this.url = this.user.pfp!;
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
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.userService.upUser(this.user).subscribe();
    alertyfy.success('Date salvate!');
    setTimeout(() => {
      window.location.reload()
    }, 2000);
    this.router.navigate(['/']);
  }

  reload() {
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }
  onSelectFile(event: { target: any; }) {
    if (event.target!.files && event.target!.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target!.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target!.result as string;
        console.log(this.url);
        // this.userService.userToEdit.pfp = this.url;
        // this.userService.upUsers();
        this.reload();
      }
    }


  }

  public delete() {
    // this.url = '';
  }

  passCheck() {
    if (this.passChange)
      this.passChange = false;
    else
      this.passChange = true;
  }

}
