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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { UserLoginComponent } from './components/user/user-login/user-login.component';
import { UserRegisterComponent } from './components/user/user-register/user-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserServiceService } from './services/user-service.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MatSliderModule } from '@angular/material/slider';
import { SearchPipe } from './pipes/search.pipe';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { ProductCategoryComponent } from './components/products/product-category/product-category.component';
import { GalleriaModule } from 'primeng/galleria';
import { CategoryPipe } from './pipes/category.pipe';
import { ProductSearchComponent } from './components/products/product-search/product-search.component';
import { OrderListModule } from 'primeng/orderlist';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import {BadgeModule} from 'primeng/badge';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {StepsModule} from 'primeng/steps';
import {CardModule} from 'primeng/card';
import { HttpErrorInterceptorService } from './services/httperor-interceptor.service';
import { SwiperModule } from 'swiper/angular';
const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: '', component: HomeComponent },
  { path: 'product-detail/:id', component: ProductDetailComponent },
  { path: 'user/login', component: UserLoginComponent },
  { path: 'user/register', component: UserRegisterComponent },
  { path: 'product-category/:category', component: ProductCategoryComponent },
  { path: 'product-search/:title', component: ProductSearchComponent },
  { path: 'cart', component: CartComponent },
  { path: 'user/profile/:page', component: UserProfileComponent },
  { path: '**', component: HomeComponent },
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
    UserRegisterComponent,
    SearchPipe,
    ProductCategoryComponent,
    CategoryPipe,
    ProductSearchComponent,
    UserProfileComponent,

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
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    GalleriaModule,
    OrderListModule,
    BadgeModule,
    AvatarGroupModule,
    AvatarModule,
    StepsModule,
    CardModule,
    SwiperModule,


  ],
  exports: [RouterModule],
  providers: [UserServiceService,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:HttpErrorInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
