import { ResourceLoader, ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  passChange: number = 0;
  user!: User;
  url = '';
  password = "";
  passwordConfirm = "";

  constructor(private route: ActivatedRoute, private userService: UserServiceService, private formB: FormBuilder) { }

  ngOnInit(): void {
    this.pagina = this.route.snapshot.params['page'];
    this.user = JSON.parse(localStorage.getItem('user')!);
    this.url = this.user.pfp!;
  }

  changeProfile() {
    if (this.passChange === 1)
      if (this.password != this.passwordConfirm)
        alertyfy.error('Detalii introduse incorect!');
      else {
        this.userService.userToEdit.password = this.password;
        alertyfy.success('Date salvate!');
        // this.userService.upUsers();
      }
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
    if (this.passChange === 1)
      this.passChange = 0;
    else
      this.passChange = 1;
  }

}
