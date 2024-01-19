import { Component } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component.js';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  img = 'https://picsum.photos/640/640?' + Math.random();

  fromChild(event: string) {
    console.log(event);
  }
}
