import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductPagesComponent } from './product-pages/product-pages.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CustomOrderComponent } from './custom-order/custom-order.component';
import { OrdersComponent } from './orders/orders.component';
import { AdminComponent } from './admin/admin.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { PaymentCancelComponent } from './payment-cancel/payment-cancel.component';
import { authGuard } from './auth/auth.guard';
import { adminGuard } from './auth/admin.guard';

const routes: Routes = [
  { path: 'home',         component: HomePageComponent },
  { path: 'products',     component: ProductPagesComponent, canActivate: [authGuard] },
  { path: 'product/:id',  component: ProductComponent,      canActivate: [authGuard] },
  { path: 'cart',         component: CartComponent,          canActivate: [authGuard] },
  { path: 'custom-order', component: CustomOrderComponent,   canActivate: [authGuard] },
  { path: 'orders',       component: OrdersComponent,         canActivate: [authGuard] },
  { path: 'admin',        component: AdminComponent,          canActivate: [adminGuard] },
  { path: 'payment/success', component: PaymentSuccessComponent, canActivate: [authGuard] },
  { path: 'payment/cancel',  component: PaymentCancelComponent,  canActivate: [authGuard] },
  { path: 'login',        component: LoginComponent },
  { path: 'register',     component: RegisterComponent },
  { path: '',             redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
