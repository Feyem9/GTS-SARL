import { Injectable } from '@angular/core';
import { badge } from '../product-pages/badge';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart :badge[] = [];

  constructor() { }

  add(badge:badge){
    this.cart.push(badge);
  }

  remove(badge:badge){
    this.cart = this.cart.filter((b) => b != badge);
  }
  get(){
    return this.cart
  }
}
