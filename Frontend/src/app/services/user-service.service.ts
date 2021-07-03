import { Injectable } from '@angular/core';
import { UserForRegister, UserForLogin } from '../model/UserBase';
import * as alertyfy from 'alertifyjs';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, UnsubscriptionError } from 'rxjs';
import { Order } from '../model/Orders';
import { Product } from '../model/Product';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  baseUrl = environment.baseUrl;
  constructor(private router: Router, private http: HttpClient, private httpClient: HttpClient) { }

  addUser(user: UserForRegister) {
    return this.http.post(this.baseUrl + '/account/register', user)
  }

  authUser(user: UserForLogin) {
    return this.http.post(this.baseUrl + '/account/login', user);
  }
  upUserPassword(user: User, passToChange: string): Observable<User> {
    return this.http.put<User>(this.baseUrl + '/account/update/password/' + passToChange, user);
  }
  upUser(user: User): Observable<User> {
    return this.http.put<User>(this.baseUrl + '/account/update/profile', user);
  }
  getUser(userName: string): Observable<User> {
    return this.http.get<User>(this.baseUrl + '/account/get/' + userName);
  }

  getOrders(userName: string) {
    return this.http.get<Order[]>(this.baseUrl + '/order/retrive/' + userName);
  }
  delOrder(orderId:number) {
    return this.http.delete(this.baseUrl + '/order/remove/'+ orderId);
  }
  addOrder(product:Product,userName:string,qty:number){
    alertyfy.success(qty);
    return this.http.post<Product>(this.baseUrl+'/order/add/'+userName+'/'+qty,product);
  }


  reload() {
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }
  onLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    alertyfy.success("Logout successfuly!");
    this.router.navigate(['/']);
  }
}
