import { Component, OnInit } from '@angular/core';
import { firebaseConfig } from './firebase/firebase.config';
import { initializeApp } from "firebase/app";
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ecomerce';

  constructor(private authService : AuthService){}

  ngOnInit(): void {
    initializeApp(firebaseConfig);
  }


  isAuthenticated(){
    return this.authService.isAuthenticated;
  }

  logout(){
    this.authService.logout(); 
  }

}
