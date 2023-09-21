import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ForgotPasswordComponent,
    LoginComponent,
    RegisterComponent
  ],
 
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AouthModule { }
