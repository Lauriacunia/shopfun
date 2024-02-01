import {
  Component,
  Input,
  SimpleChange,
  SimpleChanges,
  inject,
  signal,
} from '@angular/core';
import { ProductComponent } from '@products/components/product/product.component.js';
import { CommonModule } from '@angular/common';
import { Product } from '@models/product.model.js';
import { HeaderComponent } from '@shared/components/header/header.component.js';
import { CartService } from '@services/cart.service.js';
import { ProductService } from '@services/product.service.js';
import { CategoryService } from '@services/category.service.js';
import { Category } from '@models/category.model.js';
import { RouterLink } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { BannerComponent } from '@shared/components/banner/banner.component.js';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule,
    ProductComponent,
    HeaderComponent,
    RouterLink,
    ReactiveFormsModule,
    BannerComponent,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export default class ListComponent {
  @Input() category_id?: string;
  private cartService = inject(CartService);
  private productsService = inject(ProductService);
  private categoryService = inject(CategoryService);
  bannerImg =
    'https://github.com/Lauriacunia/shopfun/assets/63796774/839459f9-72b1-49f5-9623-ec1ec21c0be2';
  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);
  search = new FormControl('');

  ngOnInit() {
    this.getCategories();
    this.search.valueChanges.subscribe((value) => {
      this.getProducts();
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.getProducts();
  }

  getProducts() {
    this.productsService
      .getProducts(this.category_id, this.search.value ?? undefined)
      .subscribe({
        next: (products) => {
          console.log(products);
          this.products.set(products);
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  getCategories() {
    this.categoryService.getAll().subscribe({
      next: (categories) => {
        this.categories.set(categories);
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
