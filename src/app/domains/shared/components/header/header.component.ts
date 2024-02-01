import { Component, inject, signal } from '@angular/core';
import { Input } from '@angular/core';
import { Product } from '../../../../models/product.model.js';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../../services/cart.service.js';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  private cartService = inject(CartService);
  cart = this.cartService.cart;
  total = this.cartService.total;
  hideSideMenu = signal(true);
  logo =
    'https://github.com/Lauriacunia/shopfun/assets/63796774/464f2ea6-168c-4276-8eea-88362bb60381';

  toggleSideMenu() {
    this.hideSideMenu.update((prev) => !prev);
  }
}
