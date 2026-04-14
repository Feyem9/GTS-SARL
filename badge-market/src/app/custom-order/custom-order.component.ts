import { Component } from '@angular/core';
import { CustomOrder } from './custom-order.interface';
import { CustomOrderService } from './custom-order.service';

@Component({
  selector: 'app-custom-order',
  templateUrl: './custom-order.component.html',
  styleUrls: ['./custom-order.component.css']
})
export class CustomOrderComponent {

  isLoading = false;
  isSubmitted = false;
  errorMessage = '';

  order: CustomOrder = {
    name: '',
    text: '',
    color: '#6b21a8',
    shape: 'round',
    quantity: 1,
    logoUrl: '',
    notes: ''
  };

  shapes = ['Round', 'Square', 'Oval', 'Rectangle', 'Custom'];

  constructor(private customOrderService: CustomOrderService) {}

  async submit() {
    if (this.isLoading) return;
    this.isLoading = true;
    this.errorMessage = '';
    try {
      await this.customOrderService.submitOrder(this.order);
      this.isSubmitted = true;
    } catch (e) {
      this.errorMessage = 'Failed to submit order. Please try again.';
    } finally {
      this.isLoading = false;
    }
  }

  reset() {
    this.isSubmitted = false;
    this.order = {
      name: '',
      text: '',
      color: '#6b21a8',
      shape: 'round',
      quantity: 1,
      logoUrl: '',
      notes: ''
    };
  }
}
