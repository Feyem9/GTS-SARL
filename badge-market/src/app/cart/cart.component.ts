import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { PaymentService } from '../services/payment.service';
import { AuthService } from '../auth/auth.service';
import { badge } from '../product-pages/badge';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  isProcessing = false;
  errorMessage = '';

  constructor(
    private cartService: CartService,
    private paymentService: PaymentService,
    private authService: AuthService
  ) {}

  getCart(): badge[] { return this.cartService.get(); }
  getTotal(): number { return this.cartService.getTotal(); }
  remove(badge: badge) { this.cartService.remove(badge); }
  clearCart() { this.cartService.clearCart(); }

  async checkout() {
    if (this.isProcessing) return;
    this.isProcessing = true;
    this.errorMessage = '';
    try {
      const paymentUrl = await this.paymentService.initiatePayment(
        this.getCart(),
        'client@email.com',  // à remplacer par l'email de l'utilisateur connecté
        'Client Name'
      );
      window.location.href = paymentUrl;
    } catch (e) {
      this.errorMessage = 'Payment failed. Please try again.';
    } finally {
      this.isProcessing = false;
    }
  }
}
