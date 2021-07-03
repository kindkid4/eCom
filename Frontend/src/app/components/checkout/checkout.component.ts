import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { User } from 'src/app/model/User';
import { CartService } from 'src/app/services/cart.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import * as alertyfy from 'alertifyjs';
import { AngularFireModule } from '@angular/fire';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  user!: User;
  cart: Product[] = []
  sum: number = 0;
  constructor(private userService: UserServiceService, private cartservice: CartService, private router: Router) { }

  ngOnInit(): void {
    this.cart = this.cartservice.getCartData();
    this.sum = +this.cartservice.getSumOfCart();
    this.userService.getUser(localStorage.getItem('user')!).subscribe(
      (us: any) => {
        this.user = us;
      }
    );
  }
  procComanda() {
    if (this.user.oras === '' || this.user.judet === '' || this.user.tara === '' || this.user.strada === '' || this.user.numar === 0) {
      alertyfy.error('Adaugati o adresa pentru a plasa comanda');
    }
    else {
      this.cart.forEach((element: Product) => {

        this.userService.addOrder(element, this.user.userName,element.qty).subscribe();

      });
      alertyfy.success('Comanda procesata!');
      this.reload();
      this.router.navigate(['/']);

      this.cartservice.deleteCart();
    }


  }
  toTitle(str: string) {
    var desc = str.split(",");
    return desc[0] + ' ' + desc[1] + ' ' + desc[4] + ' ' + desc[2];
  }
  reload() {
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }
}
