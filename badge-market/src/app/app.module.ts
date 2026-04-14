import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductPagesModule } from './product-pages/product-pages.module';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import { AuthModule } from './auth/auth/auth.module';
import { CustomOrderComponent } from './custom-order/custom-order.component';
import { OrdersComponent } from './orders/orders.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CartComponent,
    FooterComponent,
    CustomOrderComponent,
    OrdersComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    ProductPagesModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
