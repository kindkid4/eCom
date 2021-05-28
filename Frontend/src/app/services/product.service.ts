import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Array<any> = [
    {
      "id": 1,
      "title": "Televizor 1",
      "qty":1,
      "price": 1000,
      "image": "https://s13emagst.akamaized.net/products/31164/31163465/images/res_903858feb9a59351a9b153771c650a6a.jpg",
      "category":"Procesor",
      "stock":8
    },
    {
      "id": 2,
      "title": "Televizor 2",
      "qty":1,
      "price": 2000,
      "image": "https://s13emagst.akamaized.net/products/31164/31163465/images/res_903858feb9a59351a9b153771c650a6a.jpg",
      "category":"Placa-Video",
      "stock":5
    },
    {
      "id": 3,
      "title": "Televizor 3",
      "qty":1,
      "price": 3000,
      "image": "https://s13emagst.akamaized.net/products/31164/31163465/images/res_903858feb9a59351a9b153771c650a6a.jpg",
      "category":"Televizor",
      "stock":10
    },
    {
      "id": 4,
      "title": "Televizor 3",
      "qty": 1,
      "price": 4000,
      "image": "https://s13emagst.akamaized.net/products/31164/31163465/images/res_903858feb9a59351a9b153771c650a6a.jpg",
      "category":"Components",
      "stock":8
    },
    {
      "id": 5,
      "title": "Televizor 4",
      "qty":1,
      "price": 5000,
      "image": "https://s13emagst.akamaized.net/products/31164/31163465/images/res_903858feb9a59351a9b153771c650a6a.jpg",
      "category":"Components",
      "stock":2
    },
    {
      "id": 6,
      "title": "Televizor 5",
      "qty":1,
      "price": 6000,
      "image": "https://s13emagst.akamaized.net/products/31164/31163465/images/res_903858feb9a59351a9b153771c650a6a.jpg",
      "category":"Card",
      "stock":0
    },
    {
      "id": 7,
      "title": "Televizor  6 ",
      "qty":1,
      "price": 7000,
      "image": "https://s13emagst.akamaized.net/products/31164/31163465/images/res_903858feb9a59351a9b153771c650a6a.jpg",
      "category":"Caster",
      "stock":1
    },
    {
      "id": 8,
      "title": "Televizor 7",
      "qty":1,
      "price": 8000,
      "image": "https://s13emagst.akamaized.net/products/31164/31163465/images/res_903858feb9a59351a9b153771c650a6a.jpg",
      "category":"Card",
      "stock":2
    },
    {
      "id": 9,
      "title": "Televizor 8",
      "qty":1,
      "price": 9000,
      "image": "https://s13emagst.akamaized.net/products/31164/31163465/images/res_903858feb9a59351a9b153771c650a6a.jpg",
      "category":"Components",
      "stock":0
    },
    {
      "id": 10,
      "title": "Televizor 9",
      "qty":1,
      "price": 10000,
      "image": "https://s13emagst.akamaized.net/products/31164/31163465/images/res_903858feb9a59351a9b153771c650a6a.jpg",
      "category":"Components",
      "stock":18
    },
  ]
  constructor() { }

  getProducts(){
    return this.products;
  }
  getProduct(id:number){
    return this.products.find(product=>
      product.id === id)
  }
}
