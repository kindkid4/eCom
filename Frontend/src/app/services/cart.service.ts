import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})


export class CartService {
  placeholder: Product[] = [];
  cartItems = new BehaviorSubject([]);
  numOfItems: any;

  constructor() {
    const ls = this.getCartData();
    if (ls)
      this.cartItems.next(ls);

  }

  addItem(product: Product) {
    const ls = this.getCartData();


    let exist: Product;
    if (ls)
      exist = ls.find((((item: { id: number; }) => {
        return item.id === product.id;
      })));



    if(exist){
      exist.qty++;
      this.setCartData(ls);
    }
    else {
      if (ls) {
        const newData = [...ls, product];
        this.setCartData(newData);
      }
      this.placeholder.push(product);
      this.setCartData(this.placeholder);
    }
  }

  setCartData(data: any) {
    localStorage.setItem('cart', JSON.stringify(data));
    this.cartItems.next(this.getCartData());
  }
  getCartData() {
    return JSON.parse(localStorage.getItem('cart')!);
  }
  deleteItem(id:number){
    const ls = this.getCartData();
    let index = ls((item: { product_id: number; }) => item.product_id === id);
    ls.splice(index, 1);
    this.setCartData(ls);
  }
}
