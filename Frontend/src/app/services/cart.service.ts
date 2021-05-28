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
  cartTotal = 0;
  constructor() {
    const ls = this.getCartData();
    if (ls) this.cartItems.next(ls);
  }

  addItem(product: Product) {
    const ls = this.getCartData();

    let exist: Product;

    if (ls)
      exist = ls.find((item :Product) => {
        return item.id === product.id;
      });
      exist = ls.find((item :Product) => {
        return item.id === product.id;
      });
    if(exist){
      exist.qty++;
      this.setCartData(ls);
    }
    else {
      if(ls)
      {
        const newData = [...ls,product];
        this.setCartData(newData);
        this.cartItems.next(this.getCartData())
      };

      this.placeholder.push(product)
      this.setCartData(this.placeholder);
    }
  }

  addProductToCart(product:Product) {
    const ls = this.getCartData();
    const productExistInCart = this.placeholder.find(({id}) => id === product.id); // find product by name
    if (!productExistInCart) {
      this.placeholder.push({...product, id:1});
      this.setCartData(this.placeholder);
      // enhance "porduct" opject with "num" property
      return;
    }
    else{
      product.qty++;
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

    let exist: Product;
    if (ls)
      exist = ls.find((item: { id: number; }) => {
        return item.id === id;
      });

    if(exist)
      if(exist.qty<=1){
        exist.qty--;
        ls.forEach((exist: Product,index: any)=>{
          if(exist.id==id) ls.splice(index,1);
       });
        this.setCartData(ls);
      }
      else{
        exist.qty--;
        this.setCartData(ls);
      }


  }


}
