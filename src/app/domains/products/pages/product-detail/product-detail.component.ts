import { Component, Input, inject, signal } from '@angular/core';
import { ProductService } from '@services/product.service';
import { Product } from '@models/product.model';
import { CommonModule } from '@angular/common';
import { CartService } from '@services/cart.service.js';
@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export default class ProductDetailComponent {
  /*  Los parametros de la ruta pueden llegar como input 
   si configuramos el withComponentInputBinding()
   en el archivo app.config.ts */

  @Input() id?: string;
  private productService = inject(ProductService);
  product = signal<Product | null>(null);
  cover = signal<string>('');
  private cartService = inject(CartService);

  ngOnInit() {
    if (this.id) {
      this.productService.getOneProduct(this.id).subscribe({
        next: (product) => {
          console.log(product);
          this.product.set(product);
          if (product?.images?.length > 0) {
            console.log(product.images[0]);
            this.cover.set(product.images[0]);
          }
        },
      });
    }
  }

  changeCover(image: string) {
    this.cover.set(image);
  }

  addToCart() {
    const product = this.product();
    if (product) this.cartService.addToCart(product);
  }
}
