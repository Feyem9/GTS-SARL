import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { MaintenancesComponent } from './maintenances/maintenances.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ChildComponent } from './home/child/child.component';

const routes: Routes = [
  {path:'home' , component:HomeComponent},
  {path:'categories' , component:CategoriesComponent},
  {path:'maintenances' , component:MaintenancesComponent},
  {path:'login' , component:LoginComponent},
  {path:'register' , component:RegisterComponent},
  {path: 'child' , component: ChildComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
