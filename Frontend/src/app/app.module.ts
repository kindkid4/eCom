import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProductCardComponent } from './components/products/product-card/product-card.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';
import { HttpClientModule} from '@angular/common/http';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { UserLoginComponent } from './components/user/user-login/user-login.component';
import { UserRegisterComponent } from './components/user/user-register/user-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserServiceService } from './services/user-service.service';
import { LoginAuthService } from './services/login-auth.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MatSliderModule } from '@angular/material/slider';
const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: '', component: HomeComponent },
  { path: 'product-detail/:id' ,component:ProductDetailComponent},
  { path: 'user/login',component:UserLoginComponent},
  { path: 'user/register',component:UserRegisterComponent},

  { path: '**', component:HomeComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    CheckoutComponent,
    HomeComponent,
    NavBarComponent,
    ProductCardComponent,
    ProductListComponent,
    ProductDetailComponent,
    UserLoginComponent,
    UserRegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    NgxGalleryModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    MatSliderModule,
  ],
  exports:[RouterModule],
  providers: [UserServiceService,LoginAuthService],
  bootstrap: [AppComponent],
})
export class AppModule { }
