import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from '@products/components/product/product.component.js';
import { CommonModule } from '@angular/common';
import { Product } from '@models/product.model.js';
import { initialProducts } from '@utils/products.seed.js';
import { HeaderComponent } from '@shared/components/header/header.component.js';
import { CartService } from '@services/cart.service.js';
import { ProductService } from '@services/product.service.js';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  img = 'https://picsum.photos/640/640?' + Math.random();
  products = signal<Product[]>(initialProducts);
  private cartService = inject(CartService);
  private productsService = inject(ProductService);

  ngOnInit() {
    this.productsService.getProducts().subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  addToCart(id: number) {
    console.log('id en lista' + id);
    const product = this.products().find((product) => product.id === id);
    if (product) {
      this.cartService.addToCart(product);
    }
  }
}
