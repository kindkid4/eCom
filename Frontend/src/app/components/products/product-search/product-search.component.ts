import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent implements OnInit {
  public searchText!: string
  public title!: string;
  constructor(private route: ActivatedRoute,
    private productService : ProductService) { }

  products!: Array<Product>;

  ngOnInit() {
    // this.products = this.productService.getProducts();
    this.title = this.route.snapshot.params['title'];

  }
}
