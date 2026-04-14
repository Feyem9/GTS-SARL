import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';
import { badge } from '../product-pages/badge';
import { CustomOrder } from '../custom-order/custom-order.interface';

type AdminTab = 'stats' | 'products' | 'orders';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  activeTab: AdminTab = 'stats';
  tabs: AdminTab[] = ['stats', 'products', 'orders'];
  isLoading = true;

  // Stats
  stats = { totalOrders: 0, totalProducts: 0, pendingOrders: 0 };

  // Produits
  products: badge[] = [];
  showProductForm = false;
  newProduct: badge = { title: '', price: 0, image: '' };
  editingProduct: badge | null = null;

  // Commandes
  orders: CustomOrder[] = [];
  statusOptions = ['pending', 'confirmed', 'delivered'];

  constructor(private adminService: AdminService) {}

  async ngOnInit() {
    await this.loadAll();
  }

  async loadAll() {
    this.isLoading = true;
    const [stats, products, orders] = await Promise.all([
      this.adminService.getStats(),
      this.adminService.getAllProducts(),
      this.adminService.getAllOrders()
    ]);
    this.stats = stats;
    this.products = products;
    this.orders = orders;
    this.isLoading = false;
  }

  // ── Produits ──
  async addProduct() {
    if (!this.newProduct.title || !this.newProduct.price) return;
    await this.adminService.addProduct(this.newProduct);
    this.newProduct = { title: '', price: 0, image: '' };
    this.showProductForm = false;
    await this.loadAll();
  }

  async deleteProduct(id: string | undefined) {
    if (!id || !confirm('Delete this product?')) return;
    await this.adminService.deleteProduct(id);
    await this.loadAll();
  }

  async updateStatus(orderId: string | undefined, status: string) {
    if (!orderId) return;
    await this.adminService.updateOrderStatus(orderId, status);
    await this.loadAll();
  }

  getStatusClass(status: string | undefined): string {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-700';
      case 'delivered': return 'bg-blue-100 text-blue-700';
      default:          return 'bg-yellow-100 text-yellow-700';
    }
  }

  formatDate(d: string | undefined): string {
    if (!d) return '-';
    return new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  }
}
