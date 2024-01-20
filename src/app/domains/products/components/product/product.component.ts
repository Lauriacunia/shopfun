import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../../models/product.model.js';
import { ReversePipe } from '@shared/pipes/reverse.pipe.js';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ReversePipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input({ required: true }) product!: Product;
  @Output() addToCart = new EventEmitter();

  constructor(private router: Router) {}

  addToCartHandler(id: number) {
    this.addToCart.emit('id');
  }

  goToProductDetail(productId: number): void {
    this.router.navigate(['/products', productId]);
  }
}
