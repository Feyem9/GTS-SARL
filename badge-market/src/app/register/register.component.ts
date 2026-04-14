import { Component } from '@angular/core';
import { registerForm } from './auth';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private authService : AuthService){}

  form: registerForm = {
    email: '',
    password: '',
    confirmPassword: ''
  }

  // isLoading : boolean = false;

   

  submit() {

   this.authService.register(this.form);
  }

  isLoading(){
    return this.authService.isLoading;
  }
}
