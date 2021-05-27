import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categoryList:Array<any>=[
    {
      "id":1,
      "category":'Placa-Video'
    },{
      "id":2,
      "category":'Components'
    },
    {
      "id":3,
      "category":'Televizor'
    },
    {
      "id":4,
      "category":'Card'
    }

  ]
  constructor() { }


  ngOnInit(): void {
  }

}
