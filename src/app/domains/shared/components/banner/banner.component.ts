import { Component, Input } from '@angular/core';
import { PrimaryButtonComponent } from '@shared/buttons/primary-button/primary-button.component.js';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [PrimaryButtonComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
})
export class BannerComponent {
  @Input() imageUrl: string = '';
  buttonText: string = 'Shop Now';
}
