import { Component, inject, signal } from '@angular/core';
import { Input } from '@angular/core';
import { Product } from '../../../../models/product.model.js';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../../services/cart.service.js';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  private cartService = inject(CartService);
  cart = this.cartService.cart;
  total = this.cartService.total;
  hideSideMenu = signal(true);

  toggleSideMenu() {
    this.hideSideMenu.update((prev) => !prev);
  }
}
