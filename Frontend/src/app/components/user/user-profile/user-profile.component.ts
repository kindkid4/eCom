import { ResourceLoader } from '@angular/compiler';
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
  items: Array<string> = ['Apple', 'Orange', 'Banana'];
  pagina: number = 1;
  passChange: number = 0;
  url = '';
  user!: User;
  tara ='';
  judet ='';
  oras = '';
  numar = 0;
  strada = '';
  constructor(private route: ActivatedRoute, private userService: UserServiceService, private formB: FormBuilder,) { }

  ngOnInit(): void {
    this.pagina = this.route.snapshot.params['page'];
    this.user = this.userService.getUser(this.userService.loggedin());
    this.url = this.user.pfp;
  }


  reload() {
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }
  changeAdress() {
    this.userService.userToEdit.tara = this.user.tara;
    this.userService.userToEdit.judet = this.user.judet;
    this.userService.userToEdit.oras = this.user.oras;
    this.userService.userToEdit.strada = this.user.strada;
    this.userService.userToEdit.numar = this.user.numar;
    this.userService.upUsers();
    alertyfy.success('Data modificate!');
  }

  onSelectFile(event) {
    if (event.target!.files && event.target!.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target!.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target!.result as string;
        console.log(this.url);
        this.userService.userToEdit.pfp = this.url;
        this.userService.upUsers();
        this.reload();
      }
    }


  }

  public delete() {
    this.url = '';
  }

  passCheck() {
    if (this.passChange === 1)
      this.passChange = 0;
    else
      this.passChange = 1;
  }

}
