import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Array<any> = [
    {
      "id": 1,
      "title": "Televizor LED Smart SAMSUNG 43AU8072, Ultra HD 4K, HDR, 108 cm",
      "qty":1,
      "price": 1700,
      "image": "https://lcdn.altex.ro/resize/media/catalog/product/U/A/2bd48d28d1c32adea0e55139a4e6434a/UA65AU8000WXZW_011_Front3_Black.jpg",
      "category":"Televizor",
      "stock":8
    },
    {
      "id": 2,
      "title": "Televizor LED Smart SAMSUNG 32T4302, HD, HDR, 80 cm",
      "qty":1,
      "price": 1000,
      "image": "https://lcdn.altex.ro/resize/media/catalog/product/T/4/2bd48d28d1c32adea0e55139a4e6434a/T4300_UTZ1__009_Front3_Black_320b90e0.jpg",
      "category":"Televizor,Smart TV",
      "stock":5
    },
    {
      "id": 3,
      "title": "Televizor LED Smart VORTEX 32TPHDE1S, 81cm",
      "qty":1,
      "price": 3000,
      "image": "https://lcdn.altex.ro/resize/media/catalog/product/V/3/2bd48d28d1c32adea0e55139a4e6434a/V32TPHDE1Sdes.jpg",
      "category":"Televizor,Full HD & HD",
      "stock":10
    },
    {
      "id": 4,
      "title": "Televizor LED VORTEX V24R6052, HD, 60 cm",
      "qty": 1,
      "price": 500,
      "image": "https://lcdn.altex.ro/resize/media/catalog/product/V/2/2bd48d28d1c32adea0e55139a4e6434a/V24R6052.jpg",
      "category":"Televizor,4K UHD",
      "stock":0
    },
    {
      "id": 5,
      "title": "Televizor LED VORTEX V24R6052, HD, 60 cm",
      "qty": 1,
      "price": 1200,
      "image": "https://lcdn.altex.ro/resize/media/catalog/product/T/e/2bd48d28d1c32adea0e55139a4e6434a/Telefon-SAMSUNG-Galaxy-A32_-128GB_-4GB-RAM_-Dual-SIM_-Black-10.jpg",
      "category":"Telefon",
      "stock":0
    },
    {
      "id": 6,
      "title": "Telefon XIAOMI Redmi 9, 64GB, 4GB RAM, Dual SIM, Carbon Grey",
      "qty": 1,
      "price": 599,
      "image": "https://lcdn.altex.ro/resize/media/catalog/product/R/e/2bd48d28d1c32adea0e55139a4e6434a/Redmi_9_grey.jpg",
      "category":"Telefon",
      "stock":3
    },
    {
      "id": 7,
      "title": "Telefon XIAOMI Redmi 9C NFC, 64GB, 3GB RAM, Dual SIM, Midnight Grey",
      "qty": 1,
      "price": 470,
      "image": "https://lcdn.altex.ro/resize/media/catalog/product/T/e/2bd48d28d1c32adea0e55139a4e6434a/Telefon-XIAOMI-Redmi-9C-NFC-Midnight-Grey.jpg",
      "category":"Telefon",
      "stock":0
    },
    {
      "id": 8,
      "title": "Telefon SAMSUNG Galaxy A02s, 32GB, 3GB RAM, Dual SIM, Black",
      "qty": 1,
      "price": 650,
      "image": "https://lcdn.altex.ro/resize/media/catalog/product/T/e/2bd48d28d1c32adea0e55139a4e6434a/Telefon-SAMSUNG-Galaxy-A02s_-32GB_-3GB-RAM_-Dual-SIM_-Black_4.jpg",
      "category":"Telefon",
      "stock":4
    },

  ]

  baseUrl = environment.baseUrl;
  constructor(private http:HttpClient) { }

  getProducts(){
    return this.products;
  }

  getAllProducts(): Observable<string[]>{
    return this.http.get<string[]>(this.baseUrl+'/product/products');
  }

  getProduct(id:number){
    return this.products.find(product=>
      product.id === id)
  }
}
