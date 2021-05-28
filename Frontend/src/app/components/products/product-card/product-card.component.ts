import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import * as alertyfy from 'alertifyjs';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product!:Product;
  stock :number = 1;
  constructor(
    private productService:ProductService,
    private route: ActivatedRoute,
    private cartService:CartService) { }

  ngOnInit(): void {
  }

  addToCart(product: Product){
    this.cartService.addItem(product);
    alertyfy.success("Produs adaugat!");
  }
}
