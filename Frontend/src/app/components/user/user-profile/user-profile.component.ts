import { ResourceLoader, ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserServiceService } from 'src/app/services/user-service.service';
import * as alertyfy from 'alertifyjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Order } from 'src/app/model/Orders';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  pagina: number = 1;
  passChange: boolean = false;
  user!: User;
  orders:Order[]=[];
  url = '';
  password = "";
  passwordConfirm = "";
  email='';
  telefon=0;
  tara='';
  judet='';
  oras='';
  strada='';
  numar=0;
  orderToDelete=0;
  constructor(private route: ActivatedRoute, private userService: UserServiceService, private http: HttpClient, private formB: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.pagina = this.route.snapshot.params['page'];
    if(localStorage.getItem('token')!== null){
    this.userService?.getUser(localStorage.getItem('user')!).subscribe(
      (us: any) => {
        this.user = us;
        this.url = this.user.pfp!;
        this.email = this.user.email!;
        this.telefon = this.user.mobile!;
        this.tara = this.user.tara!;
        this.judet = this.user.judet!;
        this.oras = this.user.oras!;
        this.strada = this.user.strada!;
        this.numar = this.user.numar!;
      }
    );
    }
    this.userService?.getOrders(localStorage.getItem('user')!).subscribe(
      (ord:any) =>{
        this.orders = ord;
      }
    )
  }
  returnOrder(orderId:number){
    if(this.orderToDelete==0)
    {
      alertyfy.error("Introduce-ti un numar pentru stergerea comenzi dorite");
    }
    else{
      this.userService.delOrder(orderId).subscribe(alertyfy.success("Comanda a fost returnata cu sucess!"));
    }

  }
  changePassword() {
    if (this.passChange)
      if (this.password != this.passwordConfirm)
        alertyfy.error('Detalii introduse incorect!');
      else {
        this.userService.upUserPassword(this.user, this.password).subscribe();
        alertyfy.success('Parola salvata!');
      }
  }
  changeProfile() {
    this.user.email = this.email;
    this.user.mobile = this.telefon;
    this.userService.upUser(this.user).subscribe();
    alertyfy.success('Date salvate!');
  }
  chanceAdress(){
    if(this.tara==''|| this.judet=='' || this.oras=='' || this.strada=='' || this.numar==0){
      alertyfy.error("Date lipsa");
      return;
    }
    this.user.tara=this.tara;
    this.user.judet=this.judet;
    this.user.oras=this.oras;
    this.user.strada=this.strada;
    this.user.numar=this.numar;
    this.userService.upUser(this.user).subscribe();
    alertyfy.success('Adresa salvata!');
  }

  reload() {
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }

  passCheck() {
    if (this.passChange)
      this.passChange = false;
    else
      this.passChange = true;
  }

}
