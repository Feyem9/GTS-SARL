import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProduct(){
    return  [
      {
        price: 50,
        title: 'badge professionel B1',
        image: ' assets/badge3.webp'
      },
      {
        price: 65,
        title: 'super badge B1',
        image: ' assets/badge4.webp'
      }, {
        price: 40,
        title: 'badge B1',
        image: 'assets/istockphoto-1320919752-170667a.webp'
      }, {
        price: 40,
        title: 'badge B1',
        image: ' assets/badge8.jpg'
      }, {
        price: 40,
        title: 'badge B7',
        image: ' assets/badge6.jpg'
      }, {
        price: 40,
        title: 'badge B7',
        image: ' assets/badge10.jpg'
      }, {
        price: 20,
        title: 'simple badge B1',
        image: ' assets/badge7.jpg'
      }, {
        price: 20,
        title: 'simple badge B1',
        image: ' assets/badge9.jpg'
      }, {
        price: 20,
        title: 'simple badge B1',
        image: ' assets/badge5.jpg'
      },
    ];
  }
}
