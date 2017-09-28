import { ShoppingCartService } from './services/shopping-cart.service';
import { ProductService } from './services/product.service';
import { FormsModule } from '@angular/forms';
import { CategoryService } from './services/category.service';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { UserService } from './services/user.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AFService } from './services/af.service';

import { RouterModule } from '@angular/router';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomFormsModule } from 'ng2-validation';
import { DataTableModule } from 'angular-4-data-table';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { AdminProductsComponent } from './components/admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './components/admin/admin-orders/admin-orders.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ProductFormComponent } from './components/admin/product-form/product-form.component';
import { ProductFilterComponent } from './components/products/product-filter/product-filter.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CheckoutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    LoginComponent,
    LogoutComponent,
    RegistrationComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component:ProductsComponent },
      { path: 'products', component:ProductsComponent },
      { path:'register', component:RegistrationComponent},
      { path: 'login', component:LoginComponent },
      { path: 'logout', component:LogoutComponent },
      { path: 'shopping-cart', component:ShoppingCartComponent },
      { path: 'my/orders', component:MyOrdersComponent, canActivate: [AuthGuardService] },
      { path: 'check-out', component:CheckoutComponent, canActivate: [AuthGuardService] },
      { path: 'order-success', component:OrderSuccessComponent, canActivate: [AuthGuardService] },
      { path: 'admin/products/new', component:ProductFormComponent, canActivate: [AuthGuardService, AdminAuthGuardService] },
      { path: 'admin/products/:id', component:ProductFormComponent, canActivate: [AuthGuardService, AdminAuthGuardService] },
      { path: 'admin/products', component:AdminProductsComponent, canActivate: [AuthGuardService, AdminAuthGuardService] },
      { path: 'admin/orders', component:AdminOrdersComponent, canActivate: [AuthGuardService,AdminAuthGuardService ] }
    ])
  ],
  providers: [
    AFService, 
    AuthGuardService,
    AdminAuthGuardService, 
    UserService, 
    CategoryService,
    ProductService,
    ShoppingCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
