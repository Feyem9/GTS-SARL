import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-payment-cancel',
  templateUrl: './payment-cancel.component.html'
})
export class PaymentCancelComponent implements OnInit {

  orderId = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private paymentService: PaymentService
  ) {}

  async ngOnInit() {
    this.orderId = this.route.snapshot.queryParamMap.get('orderId') || '';
    if (this.orderId) {
      await this.paymentService.updateOrderStatus(this.orderId, 'cancelled').catch(() => {});
    }
  }

  goToCart() { this.router.navigate(['/cart']); }
  goHome() { this.router.navigate(['/home']); }
}
