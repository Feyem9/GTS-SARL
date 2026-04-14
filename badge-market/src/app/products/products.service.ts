import { Injectable } from '@angular/core';
import { badge } from '../product-pages/badge';
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  query,
  orderBy
} from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private seedData: badge[] = [
    { price: 50, title: 'badge professionel B1', image: 'assets/badge3.webp' },
    { price: 65, title: 'super badge B1',        image: 'assets/badge4.webp' },
    { price: 40, title: 'badge B1',              image: 'assets/istockphoto-1320919752-170667a.webp' },
    { price: 40, title: 'badge B1',              image: 'assets/badge8.jpg' },
    { price: 40, title: 'badge B7',              image: 'assets/badge6.jpg' },
    { price: 40, title: 'badge B7',              image: 'assets/badge10.jpg' },
    { price: 20, title: 'simple badge B1',       image: 'assets/badge7.jpg' },
    { price: 20, title: 'simple badge B1',       image: 'assets/badge9.jpg' },
    { price: 20, title: 'simple badge B1',       image: 'assets/badge5.jpg' },
  ];

  // Fallback synchrone (utilisé avant le chargement Firestore)
  getProduct(): badge[] {
    return this.seedData;
  }

  // Charge les produits depuis Firestore
  async getProductsFromFirestore(): Promise<badge[]> {
    try {
      const db = getFirestore();
      const q = query(collection(db, 'products'), orderBy('title'));
      const snapshot = await getDocs(q);

      if (snapshot.empty) {
        // Première fois : on seed Firestore avec les données locales
        await this.seedFirestore();
        return this.seedData;
      }

      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as badge));

    } catch (error) {
      console.error('Firestore load error, using local data:', error);
      return this.seedData;
    }
  }

  // Peuple Firestore avec les données initiales
  private async seedFirestore(): Promise<void> {
    const db = getFirestore();
    const col = collection(db, 'products');
    for (const badge of this.seedData) {
      await addDoc(col, badge);
    }
  }
}
