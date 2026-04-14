import { Component, OnInit } from '@angular/core';
import { CustomOrder } from '../custom-order/custom-order.interface';
import { CustomOrderService } from '../custom-order/custom-order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: CustomOrder[] = [];
  isLoading = true;
  errorMessage = '';

  constructor(private customOrderService: CustomOrderService) {}

  async ngOnInit() {
    try {
      this.orders = await this.customOrderService.getMyOrders();
    } catch (e) {
      this.errorMessage = 'Failed to load orders. Please try again.';
    } finally {
      this.isLoading = false;
    }
  }

  getStatusClass(status: string | undefined): string {
    switch (status) {
      case 'confirmed':  return 'bg-green-100 text-green-700';
      case 'delivered':  return 'bg-blue-100 text-blue-700';
      default:           return 'bg-yellow-100 text-yellow-700';
    }
  }

  formatDate(dateStr: string | undefined): string {
    if (!dateStr) return '-';
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric', month: 'short', day: 'numeric'
    });
  }
}
