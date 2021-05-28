import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart:Product[] = []
  totalSum:number = 0;
  loggedinUser!: string;
  constructor(
    private cartService:CartService
  ) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCartData();
    this.cart.forEach((exist: Product, index: any) => {
      this.totalSum+= exist.price*exist.qty
    });
  }
  removeQuant(item:Product){
    this.cartService.deleteItem(item.id);
    this.cart = this.cartService.getCartData();
    this.totalSum-=item.price;
  }
  addQuant(item:Product){
    this.cartService.addItem(item);
    this.cart = this.cartService.getCartData();
    this.totalSum+=item.price;
  }

  loggedin() {
    this.loggedinUser = localStorage.getItem('token')!;
    return this.loggedinUser;
  }

}
