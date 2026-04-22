import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentService } from '../services/payment.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html'
})
export class PaymentSuccessComponent implements OnInit {

  isVerifying = true;
  orderId = '';
  status = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private paymentService: PaymentService,
    private cartService: CartService
  ) {}

  async ngOnInit() {
    this.orderId = this.route.snapshot.queryParamMap.get('orderId') || '';

    if (this.orderId) {
      try {
        await this.paymentService.updateOrderStatus(this.orderId, 'success');
        this.cartService.clearCart();
        this.status = 'success';
      } catch {
        this.status = 'error';
      }
    }
    this.isVerifying = false;
  }

  goToOrders() {
    this.router.navigate(['/orders']);
  }
}
