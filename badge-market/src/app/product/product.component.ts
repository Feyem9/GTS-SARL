import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { badge } from '../product-pages/badge';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // Utilisé comme carte dans la liste
  @Input() badge: badge = {} as badge;
  @Input() isCard: boolean = false;
  @Input() badgeIndex: number = 0;

  isInCart: boolean = false;
  isDetailPage: boolean = false;

  constructor(
    private cartService: CartService,
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.isDetailPage = true;
      const products = await this.productsService.getProductsFromFirestore();
      this.badge = products[+id] || {} as badge;
    }
  }

  addToCart() {
    this.cartService.add(this.badge);
    this.isInCart = true;
  }

  removeFromCart() {
    this.isInCart = false;
    this.cartService.remove(this.badge);
  }

  goBack() {
    this.router.navigate(['/products']);
  }

  goToDetail() {
    this.router.navigate(['/product', this.badgeIndex]);
  }
}
