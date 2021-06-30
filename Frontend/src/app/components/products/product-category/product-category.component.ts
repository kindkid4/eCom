import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  public categoryType!: string;
  products!:Array<any>;

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.categoryType = this.route.snapshot.params['category'];
  }
}
