import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { MaintenancesComponent } from './maintenances/maintenances.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ChildComponent } from './home/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    MaintenancesComponent,
    LoginComponent,
    RegisterComponent,
    // HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChildComponent,
    HomeModule,
    HammerModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
