import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categoryList: Array<any> = [
    {
      "id": 1,
      "categoryType": 'Smart TV'
    },
    {
      "id": 2,
      "categoryType": 'Laptop Gaming'
    },
    {
      "id": 3,
      "categoryType": 'Tableta'
    },
  ]
  constructor() { }


  ngOnInit(): void {
  }

}
