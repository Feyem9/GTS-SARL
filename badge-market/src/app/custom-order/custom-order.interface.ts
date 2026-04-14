export interface CustomOrder {
  id?: string;
  userId?: string;
  name: string;
  text: string;
  color: string;
  shape: string;
  quantity: number;
  logoUrl?: string;
  notes?: string;
  status?: 'pending' | 'confirmed' | 'delivered';
  createdAt?: string;
}
