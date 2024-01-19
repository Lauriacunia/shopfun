import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input() img: string = '';
  @Input({ required: true }) title: string = '';
  @Input() price: number = 0;
  @Input() description: string = '';

  @Output() addToCart = new EventEmitter();

  addToCartHandler() {
    this.addToCart.emit('soy tu hijo');
  }
}
