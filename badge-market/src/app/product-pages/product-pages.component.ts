import { Component, OnInit } from '@angular/core';
import { badge } from './badge';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-product-pages',
  templateUrl: './product-pages.component.html',
  styleUrls: ['./product-pages.component.css']
})
export class ProductPagesComponent implements OnInit {

  allBadges: badge[] = [];
  badges: badge[] = [];

  searchQuery: string = '';
  selectedSort: string = 'default';
  maxPrice: number = 100;
  isLoading: boolean = true;

  constructor(private productService: ProductsService) {}

  async ngOnInit() {
    this.isLoading = true;
    this.allBadges = await this.productService.getProductsFromFirestore();
    this.badges = [...this.allBadges];
    this.maxPrice = Math.max(...this.allBadges.map(b => b.price));
    this.isLoading = false;
  }

  applyFilters() {
    let result = [...this.allBadges];

    // Filtre par recherche
    if (this.searchQuery.trim()) {
      result = result.filter(b =>
        b.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }

    // Filtre par prix max
    result = result.filter(b => b.price <= this.maxPrice);

    // Tri
    if (this.selectedSort === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (this.selectedSort === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (this.selectedSort === 'name-asc') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    this.badges = result;
  }

  resetFilters() {
    this.searchQuery = '';
    this.selectedSort = 'default';
    this.maxPrice = Math.max(...this.allBadges.map(b => b.price));
    this.badges = [...this.allBadges];
  }

  // Retourne l'index original pour la navigation vers le détail
  getOriginalIndex(badge: badge): number {
    return this.allBadges.indexOf(badge);
  }
}
