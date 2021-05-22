import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  Product : any = {
    "Id":1,
    "Name":"Televizor Samsung Smart 4K" ,
    "Stock":1,
    "Price":5000,
    "Image":"https://s13emagst.akamaized.net/products/31164/31163465/images/res_903858feb9a59351a9b153771c650a6a.jpg"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
