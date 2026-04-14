import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const BASE_URL = process.env['PAYUNIT_MODE'] === 'live'
  ? 'https://app.payunit.net/api'
  : 'https://sandbox.payunit.net/api';

export interface InitiatePaymentDto {
  amount: number;
  currency: string;         // XAF, USD, EUR...
  description: string;
  clientName: string;
  clientEmail: string;
  returnUrl?: string;
  cancelUrl?: string;
  metadata?: Record<string, string>;
}

export interface PaymentResult {
  transactionId: string;
  paymentUrl: string;
  status: string;
}

export class PayUnitService {

  private getAuthHeader() {
    const credentials = Buffer.from(
      `${process.env['PAYUNIT_API_USERNAME']}:${process.env['PAYUNIT_API_PASSWORD']}`
    ).toString('base64');
    return {
      'Authorization': `Basic ${credentials}`,
      'x-api-key': process.env['PAYUNIT_API_KEY'] || '',
      'Content-Type': 'application/json'
    };
  }

  async initiatePayment(dto: InitiatePaymentDto): Promise<PaymentResult> {
    const transactionId = uuidv4();

    const payload = {
      total_amount: dto.amount,
      currency: dto.currency,
      transaction_id: transactionId,
      description: dto.description,
      notify_url: process.env['PAYUNIT_NOTIFY_URL'],
      return_url: dto.returnUrl || process.env['PAYUNIT_RETURN_URL'],
      cancel_url: dto.cancelUrl || process.env['PAYUNIT_CANCEL_URL'],
      purchaser_name: dto.clientName,
      purchaser_email: dto.clientEmail,
      metadata: dto.metadata || {}
    };

    const response = await axios.post(
      `${BASE_URL}/gateway/initialize`,
      payload,
      { headers: this.getAuthHeader() }
    );

    return {
      transactionId,
      paymentUrl: response.data.data?.payment_url || response.data.payment_url,
      status: 'initiated'
    };
  }

  async verifyPayment(transactionId: string): Promise<Record<string, unknown>> {
    const response = await axios.get(
      `${BASE_URL}/gateway/transaction/${transactionId}`,
      { headers: this.getAuthHeader() }
    );
    return response.data;
  }
}
