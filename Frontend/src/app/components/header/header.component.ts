import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loggedinUser!: string;
  value='';
  constructor() { }
  public wasInside = true;
  searchText = '';
  characters = [
    'Ant-Man',
    'Aquaman',
    'Asterix',
    'The Atom',
    'The Avengers',
    'Batgirl',
    'Batman',
    'Batwoman'
  ]
  products: Array<any> = [
    {
      "Id": 1,
      "Title": "Televizor QLED Smart SAMSUNG 85Q950T, 8K,",
      "Stock": 1,
      "Price": 7000,
      "Image": "https://s13emagst.akamaized.net/products/31164/31163465/images/res_903858feb9a59351a9b153771c650a6a.jpg",
      "category":"Procesor"
    },
    {
      "Id": 2,
      "Title": "Televizor QLED Smart T, 8K, HDR, 214 cm",
      "Stock": 1,
      "Price": 6000,
      "Image": "https://s13emagst.akamaized.net/products/31164/31163465/images/res_903858feb9a59351a9b153771c650a6a.jpg",
      "category":"Placa-Video"
    },
    {
      "Id": 3,
      "Title": "Televizor QLED Smart SAMSUNG 85Q950T",
      "Stock": 1,
      "Price": 5000,
      "Image": "https://s13emagst.akamaized.net/products/31164/31163465/images/res_903858feb9a59351a9b153771c650a6a.jpg",
      "category":"Televizor"
    },
    {
      "Id": 4,
      "Title": "Televizor QLED Smart SAMSUNG 85Q950T, 8K, ",
      "Stock": 0,
      "Price": 4000,
      "Image": "https://s13emagst.akamaized.net/products/31164/31163465/images/res_903858feb9a59351a9b153771c650a6a.jpg",
      "category":"Components"
    },
    {
      "Id": 5,
      "Title": "Televizor QLED Smart SAMSUNG , 8K, HDR, 214 cm",
      "Stock": 1,
      "Price": 3000,
      "Image": "https://s13emagst.akamaized.net/products/31164/31163465/images/res_903858feb9a59351a9b153771c650a6a.jpg",
      "category":"Components"
    },
    {
      "Id": 6,
      "Title": "Televizor SAMSUNG 85Q950T, 8K, HDR, 214 cm",
      "Stock": 1,
      "Price": 2000,
      "Image": "https://s13emagst.akamaized.net/products/31164/31163465/images/res_903858feb9a59351a9b153771c650a6a.jpg",
      "category":"Card"
    },
    {
      "Id": 7,
      "Title": " QLED Smart SAMSUNG 85Q950T, 8K, HDR, 214 cm",
      "Stock": 1,
      "Price": 1000,
      "Image": "https://s13emagst.akamaized.net/products/31164/31163465/images/res_903858feb9a59351a9b153771c650a6a.jpg",
      "category":"Caster"
    },
    {
      "Id": 8,
      "Title": " QLED Smart SAMSUNG 85Q950T, 8K, HDR, 214 cm",
      "Stock": 1,
      "Price": 1000,
      "Image": "https://s13emagst.akamaized.net/products/31164/31163465/images/res_903858feb9a59351a9b153771c650a6a.jpg",
      "category":"Card"
    },
    {
      "Id": 9,
      "Title": " QLED Smart SAMSUNG 85Q950T, 8K, HDR, 214 cm",
      "Stock": 1,
      "Price": 1000,
      "Image": "https://s13emagst.akamaized.net/products/31164/31163465/images/res_903858feb9a59351a9b153771c650a6a.jpg",
      "category":"Components"
    },
    {
      "Id": 10,
      "Title": " QLED Smart SAMSUNG 85Q950T, 8K, HDR, 214 cm",
      "Stock": 1,
      "Price": 1000,
      "Image": "https://s13emagst.akamaized.net/products/31164/31163465/images/res_903858feb9a59351a9b153771c650a6a.jpg",
      "category":"Components"
    },
  ]

  @HostListener('click')
  clickInside() {

    this.searchText="";
    this.wasInside = true;
  }

  @HostListener('document:click')
  clickout() {
    if (!this.wasInside) {
      this.searchText="";
    }
    this.wasInside = false;
  }

  ngOnInit(): void {
  }
  loggedin(){
    this.loggedinUser = localStorage.getItem('token')!;
    return this.loggedinUser;
  }
}
