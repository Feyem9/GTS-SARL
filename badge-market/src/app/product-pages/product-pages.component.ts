import { Component, OnInit } from '@angular/core';
import { badge } from './badge';
import { ProductsService } from '../products/products.service';


@Component({
  selector: 'app-product-pages',
  templateUrl: './product-pages.component.html',
  styleUrls: ['./product-pages.component.css']
})
export class ProductPagesComponent implements OnInit{

  constructor(private productService:ProductsService){
    this.badges = this.productService.getProduct()
  }

  

  badges: badge[] =[];

  // cart: badge[] = [];
  // product:string = '';


  showProducts: boolean = true;

  // showProduct(){
  //   // alert('show products')
  //   this.showProducts = !this.showProducts;
  // }

  // addToCart(event: badge) {
  //   console.log(event);

  // }
 
  ngOnInit() { }

}
