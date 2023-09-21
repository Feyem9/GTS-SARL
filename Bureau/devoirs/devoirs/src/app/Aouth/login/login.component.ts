import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AouthService } from '../aouth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup = new FormGroup({});
  loginError: string = '';

  constructor (
    private formBuilder: FormBuilder,
    private aouthService: AouthService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],

      password: ['', [
        Validators.required
      ]]
    })
  }

  private clearError (): void {
     setTimeout(() => {
      this.loginError = ''
     }, 2000);
  }

  onSubmit() {

    const form = this.loginForm.value;
    const login = this.aouthService.login(form.email, form.password)
    if (login.error) {

      this.loginError = login.message;
      this.clearError();
    } else {

      this.router.navigate(['dash-bord'], {

        queryParams: {id: login.data?.id}
      })
    }
    alert('your information have been saved successfully');
      console.log(this.onSubmit);
      

  }
}
