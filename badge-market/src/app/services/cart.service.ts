import { Injectable } from '@angular/core';
import { badge } from '../product-pages/badge';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: badge[] = [];

  constructor(private authService: AuthService) {
    this.loadFromLocalStorage();
  }

  add(badge: badge) {
    this.cart.push(badge);
    this.save();
  }

  remove(badge: badge) {
    this.cart = this.cart.filter((b) => b !== badge);
    this.save();
  }

  get(): badge[] {
    return this.cart;
  }

  getTotal(): number {
    return this.cart.reduce((sum, b) => sum + b.price, 0);
  }

  getCount(): number {
    return this.cart.length;
  }

  // Sauvegarde locale + Firestore
  private save() {
    this.saveToLocalStorage();
    this.saveToFirestore();
  }

  private saveToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  private loadFromLocalStorage() {
    const stored = localStorage.getItem('cart');
    if (stored) {
      this.cart = JSON.parse(stored);
    }
  }

  async saveToFirestore() {
    const userId = this.authService.getCurrentUserId();
    if (!userId) return;
    const db = getFirestore();
    await setDoc(doc(db, 'carts', userId), { items: this.cart });
  }

  async loadFromFirestore() {
    const userId = this.authService.getCurrentUserId();
    if (!userId) return;
    const db = getFirestore();
    const snap = await getDoc(doc(db, 'carts', userId));
    if (snap.exists()) {
      this.cart = snap.data()['items'] || [];
      this.saveToLocalStorage();
    }
  }

  clearCart() {
    this.cart = [];
    localStorage.removeItem('cart');
    this.saveToFirestore();
  }
}
