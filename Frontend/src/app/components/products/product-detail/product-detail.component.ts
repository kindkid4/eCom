import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import * as alertyfy from 'alertifyjs';
import { SwiperOptions } from 'swiper';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Zoom,
} from 'swiper/core';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  public productId!: number;
  product!: Product;
  Desc: string[]=[];
  prImg?: string[];


  constructor(private route: ActivatedRoute, private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {

    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y,Zoom]);
    this.productId = this.route.snapshot.params['id'];
    this.productService.getProduct(this.productId
    ).subscribe(
      (data: any) => {
        this.product = data;
        this.Desc = this.product?.description?.split(",");
        this.prImg = this.product.images.split(" ");
      }
    )
  }
  addToCart(product: Product) {
    this.cartService.addItem(product);
    alertyfy.success("Produs adaugat!");
  }

  checkStock() {
    if (this.product?.stock >= 1)
      return true;
    else
      return false;
  }


  config:SwiperOptions = {
    navigation:true,
    zoom:true,
    pagination:{
      clickable:true
    },
    spaceBetween: 250
  }
}


