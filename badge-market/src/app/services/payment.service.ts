import { Injectable } from '@angular/core';
import { badge } from '../product-pages/badge';

// URL du microservice PayUnit (à mettre dans environment.ts en prod)
const PAYUNIT_SERVICE_URL = 'http://localhost:3000';
const PAYUNIT_SERVICE_KEY = 'your_secret_key_here'; // même clé que MICROSERVICE_API_KEY

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  async initiatePayment(items: badge[], userEmail: string, userName: string): Promise<string> {
    const total = items.reduce((sum, b) => sum + b.price, 0);

    const response = await fetch(`${PAYUNIT_SERVICE_URL}/api/payment/initiate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': PAYUNIT_SERVICE_KEY
      },
      body: JSON.stringify({
        amount: total,
        currency: 'XAF',
        description: `Badge Market order - ${items.length} item(s)`,
        clientName: userName,
        clientEmail: userEmail,
        returnUrl: `${window.location.origin}/payment/success`,
        cancelUrl: `${window.location.origin}/payment/cancel`,
        metadata: {
          items: items.map(i => i.title).join(', ')
        }
      })
    });

    const data = await response.json();
    if (!data.success) throw new Error(data.error || 'Payment failed');
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
}
