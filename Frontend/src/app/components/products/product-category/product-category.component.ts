import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss']
})
export class ProductCategoryComponent implements OnInit {
  public category!: string;
  constructor(private route:ActivatedRoute) { }

  products: Array<any> = [
    {
      "Id": 1,
      "title": "Televizor QLED Smart SAMSUNG 85Q950T, 8K,",
      "stock": 1,
      "price": 7000,
      "image": "https://s13emagst.akamaized.net/products/31164/31163465/images/res_903858feb9a59351a9b153771c650a6a.jpg",
      "category":"Procesor"
    },
    {
      "Id": 2,
      "title": "Televizor QLED Smart T, 8K, HDR, 214 cm",
      "stock": 1,
      "price": 6000,
      "image": "https://s13emagst.akamaized.net/products/31164/31163465/images/res_903858feb9a59351a9b153771c650a6a.jpg",
      "category":"Placa-Video"
    },
    {
      "Id": 3,
      "title": "Televizor QLED Smart SAMSUNG 85Q950T",
      "stock": 1,
      "price": 5000,
      "image": "https://s13emagst.akamaized.net/products/31164/31163465/images/res_903858feb9a59351a9b153771c650a6a.jpg",
      "category":"Televizor"
    },
    {
      "Id": 4,
      "title": "Televizor QLED Smart SAMSUNG 85Q950T, 8K, ",
      "stock": 0,
      "price": 4000,
      "image": "https://s13emagst.akamaized.net/products/31164/31163465/images/res_903858feb9a59351a9b153771c650a6a.jpg",
      "category":"Components"
    },
    {
      "Id": 5,
      "title": "Televizor QLED Smart SAMSUNG , 8K, HDR, 214 cm",
      "stock": 1,
      "price": 3000,
      "image": "https://s13emagst.akamaized.net/products/31164/31163465/images/res_903858feb9a59351a9b153771c650a6a.jpg",
      "category":"Components"
    },
    {
      "Id": 6,
      "title": "Televizor SAMSUNG 85Q950T, 8K, HDR, 214 cm",
      "stock": 1,
      "price": 2000,
      "image": "https://s13emagst.akamaized.net/products/31164/31163465/images/res_903858feb9a59351a9b153771c650a6a.jpg",
      "category":"Card"
    },
    {
      "Id": 7,
      "title": " QLED Smart SAMSUNG 85Q950T, 8K, HDR, 214 cm",
      "stock": 1,
      "price": 1000,
      "image": "https://s13emagst.akamaized.net/products/31164/31163465/images/res_903858feb9a59351a9b153771c650a6a.jpg",
      "category":"Caster"
    },
    {
      "Id": 8,
      "title": " QLED Smart SAMSUNG 85Q950T, 8K, HDR, 214 cm",
      "stock": 1,
      "price": 1000,
      "image": "https://s13emagst.akamaized.net/products/31164/31163465/images/res_903858feb9a59351a9b153771c650a6a.jpg",
      "category":"Card"
    },
    {
      "Id": 9,
      "title": " QLED Smart SAMSUNG 85Q950T, 8K, HDR, 214 cm",
      "stock": 1,
      "price": 1000,
      "image": "https://s13emagst.akamaized.net/products/31164/31163465/images/res_903858feb9a59351a9b153771c650a6a.jpg",
      "category":"Components"
    },
    {
      "Id": 10,
      "title": " QLED Smart SAMSUNG 85Q950T, 8K, HDR, 214 cm",
      "stock": 1,
      "price": 1000,
      "image": "https://s13emagst.akamaized.net/products/31164/31163465/images/res_903858feb9a59351a9b153771c650a6a.jpg",
      "category":"Components"
    },
  ]

  ngOnInit() {
    this.category = this.route.snapshot.params['category'];

  }
}
