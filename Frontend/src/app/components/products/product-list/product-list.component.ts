import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Array<any> = [
    {
      "id": 1,
      "title": "Televizor QLED Smart SAMSUNG 85Q950T, 8K,",
      "stock": 1,
      "price": 7000,
      "image": "https://s13emagst.akamaized.net/products/31164/31163465/images/res_903858feb9a59351a9b153771c650a6a.jpg",
      "category":"Components"
    },
    {
      "id": 2,
      "title": "Televizor QLED Smart T, 8K, HDR, 214 cm",
      "stock": 1,
      "price": 6000,
      "image": "https://s13emagst.akamaized.net/products/31164/31163465/images/res_903858feb9a59351a9b153771c650a6a.jpg",
      "category":"Components"
    },
    {
      "id": 3,
      "title": "Televizor QLED Smart SAMSUNG 85Q950T",
      "stock": 1,
      "price": 5000,
      "image": "https://s13emagst.akamaized.net/products/31164/31163465/images/res_903858feb9a59351a9b153771c650a6a.jpg"
    },
    {
      "id": 4,
      "title": "Televizor QLED Smart SAMSUNG 85Q950T, 8K, ",
      "stock": 0,
      "price": 4000,
      "image": "https://s13emagst.akamaized.net/products/31164/31163465/images/res_903858feb9a59351a9b153771c650a6a.jpg",
      "category":"Components"
    },
    {
      "id": 5,
      "title": "Televizor QLED Smart SAMSUNG , 8K, HDR, 214 cm",
      "stock": 1,
      "price": 3000,
      "image": "https://s13emagst.akamaized.net/products/31164/31163465/images/res_903858feb9a59351a9b153771c650a6a.jpg",
      "category":"Components"
    },
    {
      "id": 6,
      "title": "Televizor SAMSUNG 85Q950T, 8K, HDR, 214 cm",
      "stock": 1,
      "price": 2000,
      "image": "https://s13emagst.akamaized.net/products/31164/31163465/images/res_903858feb9a59351a9b153771c650a6a.jpg",
      "category":"Components"
    },
    {
      "id": 7,
      "title": " QLED Smart SAMSUNG 85Q950T, 8K, HDR, 214 cm",
      "stock": 1,
      "price": 1000,
      "image": "https://s13emagst.akamaized.net/products/31164/31163465/images/res_903858feb9a59351a9b153771c650a6a.jpg",
      "category":"Components"
    },
    {
      "id": 8,
      "title": " QLED Smart SAMSUNG 85Q950T, 8K, HDR, 214 cm",
      "stock": 1,
      "price": 1000,
      "image": "https://s13emagst.akamaized.net/products/31164/31163465/images/res_903858feb9a59351a9b153771c650a6a.jpg",
      "category":"Components"
    },
    {
      "id": 9,
      "title": " QLED Smart SAMSUNG 85Q950T, 8K, HDR, 214 cm",
      "stock": 1,
      "price": 1000,
      "image": "https://s13emagst.akamaized.net/products/31164/31163465/images/res_903858feb9a59351a9b153771c650a6a.jpg",
      "category":"Components"
    },
    {
      "id": 10,
      "title": " QLED Smart SAMSUNG 85Q950T, 8K, HDR, 214 cm",
      "stock": 1,
      "price": 1000,
      "image": "https://s13emagst.akamaized.net/products/31164/31163465/images/res_903858feb9a59351a9b153771c650a6a.jpg",
      "category":"Components"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('widgetsContent', { read: ElementRef })
  public widgetsContent!: ElementRef<any>;

  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 260), behavior: 'smooth' });
  }

  public scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 260), behavior: 'smooth' });
  }
}
