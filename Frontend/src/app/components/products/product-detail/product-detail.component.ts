import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';
import { Product } from 'src/app/model/Product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import * as alertyfy from 'alertifyjs';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  galleryOptions! : NgxGalleryOptions[];
  galleryImages! : NgxGalleryImage[];
  public productId!: number;
  product!:Product;
  Desc!: string[];
  constructor(private route: ActivatedRoute,private productService: ProductService,private cartService :CartService) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['id'];
     this.productService.getProduct(this.productId
      ).subscribe(
      (data:any) => {
        this.product = data;
        this.Desc = this.product.description.split(",");
      }
    )

  }

  addToCart(product: Product){
    this.cartService.addItem(product);
    alertyfy.success("Produs adaugat!");
  }

  checkStock(){
    if(this.product?.stock>=1)
      return true;
    else
      return false;
  }
}


