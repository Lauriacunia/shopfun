import { HttpClient } from '@angular/common/http/index.js';
import { Injectable, inject } from '@angular/core';
import { Category } from '@models/category.model.js';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private http = inject(HttpClient);

  constructor() {}

  getAll() {
    return this.http.get<Category[]>(
      'https://api.escuelajs.co/api/v1/categories'
    );
  }
}