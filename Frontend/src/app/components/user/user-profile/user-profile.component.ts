import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  items: Array<string> = ['Apple', 'Orange', 'Banana'];
  pagina:number = 5;
  passChange:number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  passCheck(){
    if(this.passChange===1)
    this.passChange=0;
    else
    this.passChange=1;
  }
}
