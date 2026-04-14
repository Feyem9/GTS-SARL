import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../products/products.service';
import { ProductPagesComponent } from './product-pages.component';
import { ProductComponent } from '../product/product.component';



@NgModule({
  declarations: [ProductPagesComponent, ProductComponent],
  providers:[ProductsService],
  imports: [
    CommonModule
  ],
  exports: [ProductPagesComponent]
})
export class ProductPagesModule { }
