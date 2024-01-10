import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  title = 'welcome to our home page what did you need!';
  image : string = 'assets/welcome.webp'

  constructor(private authService : AuthService){}


  isAuthenticated(){
    return this.authService.isAuthenticated;
  }

  logout(){
    this.authService.logout(); 
  }
}
