import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loggedinUser!: string;
  value = '';
  itemInCart!: number;
  public wasInside = true;
  searchText = '';
  products!: Array<any>;
  constructor(private productService: ProductService, private cartService: CartService,
    private router: Router) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.cartService.cartItems.subscribe((d: string | any[]) => {
      this.itemInCart = d.length;

    })

  }



  @HostListener('click')
  clickInside() {

    this.searchText = "";
    this.wasInside = true;
  }

  Search() {
    if (this.searchText == '')
    this.router.navigate(['/'])
    else {
      this.router.navigate(['/product-search/' + this.searchText]);
    }
  }
  reload() {
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }
  @HostListener('document:click')
  clickout() {
    if (!this.wasInside) {
      this.searchText = "";
    }
    this.wasInside = false;
  }

  loggedin() {
    this.loggedinUser = localStorage.getItem('token')!;
    return this.loggedinUser;
  }
}
