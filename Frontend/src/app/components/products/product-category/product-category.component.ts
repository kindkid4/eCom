import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss']
})
export class ProductCategoryComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private productService : ProductService) { }

  public category!: string;
  products!:Array<any>;

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.category = this.route.snapshot.params['category'];
  }
}
