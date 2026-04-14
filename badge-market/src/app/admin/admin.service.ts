import { Injectable } from '@angular/core';
import {
  getFirestore, collection, getDocs, doc,
  updateDoc, deleteDoc, addDoc, orderBy, query
} from 'firebase/firestore';
import { CustomOrder } from '../custom-order/custom-order.interface';
import { badge } from '../product-pages/badge';

@Injectable({ providedIn: 'root' })
export class AdminService {

  // ── PRODUITS ──────────────────────────────────────────────
  async getAllProducts(): Promise<badge[]> {
    const db = getFirestore();
    const snap = await getDocs(collection(db, 'products'));
    return snap.docs.map(d => ({ id: d.id, ...d.data() } as unknown as badge));
  }

  async addProduct(product: badge): Promise<void> {
    const db = getFirestore();
    await addDoc(collection(db, 'products'), product);
  }

  async updateProduct(id: string, product: Partial<badge>): Promise<void> {
    const db = getFirestore();
    await updateDoc(doc(db, 'products', id), { ...product });
  }

  async deleteProduct(id: string): Promise<void> {
    const db = getFirestore();
    await deleteDoc(doc(db, 'products', id));
  }

  // ── COMMANDES CUSTOM ──────────────────────────────────────
  async getAllOrders(): Promise<CustomOrder[]> {
    const db = getFirestore();
    const q = query(collection(db, 'custom-orders'), orderBy('createdAt', 'desc'));
    const snap = await getDocs(q);
    return snap.docs.map(d => ({ id: d.id, ...d.data() } as unknown as CustomOrder));
  }

  async updateOrderStatus(id: string, status: string): Promise<void> {
    const db = getFirestore();
    await updateDoc(doc(db, 'custom-orders', id), { status });
  }

  // ── STATS ─────────────────────────────────────────────────
  async getStats(): Promise<{ totalOrders: number; totalProducts: number; pendingOrders: number }> {
    const db = getFirestore();
    const [ordersSnap, productsSnap] = await Promise.all([
      getDocs(collection(db, 'custom-orders')),
      getDocs(collection(db, 'products'))
    ]);
    const pending = ordersSnap.docs.filter(d => d.data()['status'] === 'pending').length;
    return {
      totalOrders: ordersSnap.size,
      totalProducts: productsSnap.size,
      pendingOrders: pending
    };
  }
}
