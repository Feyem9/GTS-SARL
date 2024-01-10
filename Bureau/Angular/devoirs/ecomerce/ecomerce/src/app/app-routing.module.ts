import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductPagesComponent } from './product-pages/product-pages.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { authGuard } from './auth/auth.guard';

const routes: Routes = [
  {path : 'home' , component: HomePageComponent},
  {path : 'products' , component: ProductPagesComponent ,
  //  canActivate : [authGuard]
},
  {path : 'product' , component: ProductComponent},
  {path : 'cart' , component: CartComponent ,
  //  canActivate : [authGuard]
  },
  {path : 'login' , component: LoginComponent},
  {path : 'register' , component : RegisterComponent},
  {path : '', redirectTo:'home' , pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
