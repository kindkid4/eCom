import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Array<any> = [
    {
      "Id": 1,
      "Title": "Televizor QLED Smart SAMSUNG 85Q950T, 8K,",
      "Stock": 1,
      "Price": 7000,
      "Image": "https://s13emagst.akamaized.net/products/31164/31163465/images/res_903858feb9a59351a9b153771c650a6a.jpg"
    },
    {
      "Id": 2,
      "Title": "Televizor QLED Smart T, 8K, HDR, 214 cm",
      "Stock": 1,
      "Price": 6000,
      "Image": "https://s13emagst.akamaized.net/products/31164/31163465/images/res_903858feb9a59351a9b153771c650a6a.jpg"
    },
    {
      "Id": 3,
      "Title": "Televizor QLED Smart SAMSUNG 85Q950T",
      "Stock": 1,
      "Price": 5000,
      "Image": "https://s13emagst.akamaized.net/products/31164/31163465/images/res_903858feb9a59351a9b153771c650a6a.jpg"
    },
    {
      "Id": 4,
      "Title": "Televizor QLED Smart SAMSUNG 85Q950T, 8K, ",
      "Stock": 0,
      "Price": 4000,
      "Image": "https://s13emagst.akamaized.net/products/31164/31163465/images/res_903858feb9a59351a9b153771c650a6a.jpg"
    },
    {
      "Id": 5,
      "Title": "Televizor QLED Smart SAMSUNG , 8K, HDR, 214 cm",
      "Stock": 1,
      "Price": 3000,
      "Image": "https://s13emagst.akamaized.net/products/31164/31163465/images/res_903858feb9a59351a9b153771c650a6a.jpg"
    },
    {
      "Id": 6,
      "Title": "Televizor SAMSUNG 85Q950T, 8K, HDR, 214 cm",
      "Stock": 1,
      "Price": 2000,
      "Image": "https://s13emagst.akamaized.net/products/31164/31163465/images/res_903858feb9a59351a9b153771c650a6a.jpg"
    },
    {
      "Id": 7,
      "Title": " QLED Smart SAMSUNG 85Q950T, 8K, HDR, 214 cm",
      "Stock": 1,
      "Price": 1000,
      "Image": "https://s13emagst.akamaized.net/products/31164/31163465/images/res_903858feb9a59351a9b153771c650a6a.jpg"
    },
    {
      "Id": 8,
      "Title": " QLED Smart SAMSUNG 85Q950T, 8K, HDR, 214 cm",
      "Stock": 1,
      "Price": 1000,
      "Image": "https://s13emagst.akamaized.net/products/31164/31163465/images/res_903858feb9a59351a9b153771c650a6a.jpg"
    },
    {
      "Id": 9,
      "Title": " QLED Smart SAMSUNG 85Q950T, 8K, HDR, 214 cm",
      "Stock": 1,
      "Price": 1000,
      "Image": "https://s13emagst.akamaized.net/products/31164/31163465/images/res_903858feb9a59351a9b153771c650a6a.jpg"
    },
    {
      "Id": 10,
      "Title": " QLED Smart SAMSUNG 85Q950T, 8K, HDR, 214 cm",
      "Stock": 1,
      "Price": 1000,
      "Image": "https://s13emagst.akamaized.net/products/31164/31163465/images/res_903858feb9a59351a9b153771c650a6a.jpg"
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
