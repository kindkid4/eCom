import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/Product';
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
  products!:Product[];

  ngOnInit() {
    this.productService.getAllProducts().subscribe(
      data => {
        this.products = data;
      }
    )
    this.categoryType = this.route.snapshot.params['category'];
  }
}
