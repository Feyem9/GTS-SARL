import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'badge-market';

  constructor(private authService: AuthService, private cartService: CartService) {}

  isAuthenticated() { return this.authService.isAuthenticated; }
  isAdmin() { return this.authService.isAdmin; }
  logout() { this.authService.logout(); }

  getCartCount(): number {
    return this.cartService.getCount();
  }
}
