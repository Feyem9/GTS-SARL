import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { badge } from '../product-pages/badge';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input()  badge: badge = {} as badge;
  // @Output() emitBadge = new EventEmitter<badge>()

  addToCart(){
    // console.log(this.badge);
    // this.emitBadge.emit(this.badge);
    this.cartService.add(this.badge);
    this.isInCart = true;
    
  }

  removeFromCart(){
    this.isInCart = false;
    this.cartService.remove(this.badge)
  }

  constructor(private cartService:CartService){

  }

  ngOnInit(): void {
    
  }

  // ngOnDestroy(): void {

  // }

  isInCart : boolean = false;
}


