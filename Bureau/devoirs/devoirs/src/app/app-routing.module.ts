import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Aouth/login/login.component';
import { RegisterComponent } from './Aouth/register/register.component';
import { ForgotPasswordComponent } from './Aouth/forgot-password/forgot-password.component';
import { DashBordComponent } from './dash-bord/dash-bord.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent, title: 'Welcom back' },
  { path: 'register', component: RegisterComponent, title: 'Create new account' },
  { path: 'forget-password', component: ForgotPasswordComponent, title: 'Forget password' },
  { path: 'dash-bord', component: DashBordComponent },
  {path : '', redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
