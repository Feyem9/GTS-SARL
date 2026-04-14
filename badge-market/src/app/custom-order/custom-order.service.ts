import { Injectable } from '@angular/core';
import { getFirestore, collection, addDoc, query, where, getDocs, orderBy } from 'firebase/firestore';
import { CustomOrder } from './custom-order.interface';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CustomOrderService {

  constructor(private authService: AuthService) {}

  async submitOrder(order: CustomOrder): Promise<void> {
    const db = getFirestore();
    const userId = this.authService.getCurrentUserId();
    await addDoc(collection(db, 'custom-orders'), {
      ...order,
      userId: userId || 'anonymous',
      status: 'pending',
      createdAt: new Date().toISOString()
    });
  }

  async getMyOrders(): Promise<CustomOrder[]> {
    const userId = this.authService.getCurrentUserId();
    if (!userId) return [];
    const db = getFirestore();
    const q = query(
      collection(db, 'custom-orders'),
      where('userId', '==', userId),
      orderBy('createdAt', 'desc')
    );
    const snap = await getDocs(q);
    return snap.docs.map(d => ({ id: d.id, ...d.data() } as unknown as CustomOrder));
  }
}
