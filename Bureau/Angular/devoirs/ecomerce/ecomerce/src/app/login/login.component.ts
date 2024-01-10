import { Component } from '@angular/core';
import { loginForm } from './auth';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
// isLoading: boolean = false;

  constructor(private authService:AuthService){}

  form: loginForm = {
    email: '',
    password: ''
  }


  submit() {

    this.authService.login(this.form);

  }

  isLoading(){
    return this.authService.isLoading;
  }

}
