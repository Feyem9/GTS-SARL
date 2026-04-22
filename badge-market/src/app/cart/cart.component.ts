import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { PaymentService } from '../services/payment.service';
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
    private paymentService: PaymentService
  ) {}

  getCart(): badge[] { return this.cartService.get(); }
  getTotal(): number { return this.cartService.getTotal(); }
  remove(badge: badge) { this.cartService.remove(badge); }
  clearCart() { this.cartService.clearCart(); }

  async checkout() {
    if (this.isProcessing || this.getCart().length === 0) return;
    this.isProcessing = true;
    this.errorMessage = '';
    try {
      const paymentUrl = await this.paymentService.initiatePayment(this.getCart());
      window.location.href = paymentUrl;
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : 'Payment failed';
      this.errorMessage = msg;
    } finally {
      this.isProcessing = false;
    }
  }
}
