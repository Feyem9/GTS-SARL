import { Injectable } from '@angular/core';
import { badge } from '../product-pages/badge';
import { environment } from '../../environments/environment';
import { getFirestore, doc, setDoc, updateDoc } from 'firebase/firestore';
import { AuthService } from '../auth/auth.service';

const PAYUNIT_SERVICE_URL = environment.payunitServiceUrl;
const PAYUNIT_SERVICE_KEY = environment.payunitServiceKey;

export interface PaymentOrder {
  orderId: string;
  transactionId?: string;
  status: 'pending' | 'success' | 'failed' | 'cancelled';
  amount: number;
  items: badge[];
  createdAt: string;
  userId: string;
}

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private authService: AuthService) {}

  async initiatePayment(items: badge[]): Promise<string> {
    const total = items.reduce((sum, b) => sum + b.price, 0);
    const userId = this.authService.getCurrentUserId() || 'anonymous';
    const userEmail = this.authService.getCurrentUserEmail();
    const userName = this.authService.getCurrentUserName();

    // Générer un ID de commande unique
    const orderId = `order_${userId}_${Date.now()}`;

    // Sauvegarder la commande en Firestore avec statut pending
    const db = getFirestore();
    const order: PaymentOrder = {
      orderId,
      status: 'pending',
      amount: total,
      items,
      createdAt: new Date().toISOString(),
      userId
    };
    await setDoc(doc(db, 'orders', orderId), order);

    // Appeler le microservice
    const response = await fetch(`${PAYUNIT_SERVICE_URL}/api/payment/initiate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': PAYUNIT_SERVICE_KEY
      },
      body: JSON.stringify({
        amount: total,
        currency: 'XAF',
        description: `Badge Market — ${items.length} article(s)`,
        clientName: userName,
        clientEmail: userEmail,
        externalId: orderId,
        returnUrl: `${window.location.origin}/payment/success?orderId=${orderId}`,
        cancelUrl: `${window.location.origin}/payment/cancel?orderId=${orderId}`,
        metadata: {
          userId,
          items: items.map(i => i.title).join(', ')
        }
      })
    });

    const data = await response.json();

    if (!data.success) {
      // Mettre à jour le statut en cas d'erreur
      await updateDoc(doc(db, 'orders', orderId), { status: 'failed' });
      throw new Error(data.error || 'Payment initiation failed');
    }

    // Sauvegarder le transactionId
    await updateDoc(doc(db, 'orders', orderId), {
      transactionId: data.data.transactionId
    });

    return data.data.paymentUrl;
  }

  async verifyPayment(transactionId: string): Promise<Record<string, unknown>> {
    const response = await fetch(
      `${PAYUNIT_SERVICE_URL}/api/payment/verify/${transactionId}`,
      { headers: { 'x-api-key': PAYUNIT_SERVICE_KEY } }
    );
    const data = await response.json();
    if (!data.success) throw new Error(data.error);
    return data.data;
  }

  async updateOrderStatus(orderId: string, status: 'success' | 'failed' | 'cancelled'): Promise<void> {
    const db = getFirestore();
    await updateDoc(doc(db, 'orders', orderId), { status });
  }
}
