import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment'
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = environment.baseUrl;
  constructor(private http:HttpClient) { }


  getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl+'/product/products');
  }

  getProduct(id:number){
    return this.getAllProducts().pipe(
      map((productArray: Product[]) => productArray.find(p=> p.id == id))
    )
  }

}
