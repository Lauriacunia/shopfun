import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../../models/product.model.js';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input({ required: true }) product!: Product;

  @Output() addToCart = new EventEmitter();

  addToCartHandler(id: number) {
    this.addToCart.emit('id');
  }
}
