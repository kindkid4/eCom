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
      "price": 1700,
      "stock":8,
      "categoryType":"Televizor",
      "image": "https://lcdn.altex.ro/resize/media/catalog/product/U/A/2bd48d28d1c32adea0e55139a4e6434a/UA65AU8000WXZW_011_Front3_Black.jpg",
      "qty":1,
    },{
      "id": 2,
      "title": "Televizor LED Smart SAMSUNG 43AU8072, Ultra HD 4K, HDR, 108 cm",
      "price": 1700,
      "stock":8,
      "categoryType":"Televizor",
      "image": "https://lcdn.altex.ro/resize/media/catalog/product/U/A/2bd48d28d1c32adea0e55139a4e6434a/UA65AU8000WXZW_011_Front3_Black.jpg",
      "qty":1,
    },{
      "id": 3,
      "title": "Televizor LED Smart SAMSUNG 43AU8072, Ultra HD 4K, HDR, 108 cm",
      "price": 1700,
      "stock":8,
      "categoryType":"Televizor",
      "image": "https://lcdn.altex.ro/resize/media/catalog/product/U/A/2bd48d28d1c32adea0e55139a4e6434a/UA65AU8000WXZW_011_Front3_Black.jpg",
      "qty":1,
    },{
      "id": 4,
      "title": "Televizor LED Smart SAMSUNG 43AU8072, Ultra HD 4K, HDR, 108 cm",
      "price": 1700,
      "stock":8,
      "categoryType":"Televizor",
      "image": "https://lcdn.altex.ro/resize/media/catalog/product/U/A/2bd48d28d1c32adea0e55139a4e6434a/UA65AU8000WXZW_011_Front3_Black.jpg",
      "qty":1,
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
