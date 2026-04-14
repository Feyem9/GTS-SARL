import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../products/products.service';
import { ProductPagesComponent } from './product-pages.component';
import { ProductComponent } from '../product/product.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProductPagesComponent, ProductComponent],
  providers: [ProductsService],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [ProductPagesComponent]
})
export class ProductPagesModule { }
