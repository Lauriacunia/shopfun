import { Product } from '../models/product.model.js';

export const initialProducts: Product[] = [
  {
    id: Date.now(),
    title: 'iPhone 12',
    price: 799,
    description: 'A large phone with one of the best screens',
    images: ['https://picsum.photos/640/640?' + Math.random()],
  },
  {
    id: Date.now(),
    title: 'iPhone 12 Pro',
    price: 999,
    description: 'A great phone with one of the best cameras',
    images: ['https://picsum.photos/640/640?' + Math.random()],
  },
  {
    id: Date.now(),
    title: 'iPhone 12 Pro Max',
    price: 1099,
    description: 'A great phone with one of the best cameras',
    images: ['https://picsum.photos/640/640?' + Math.random()],
  },
  {
    id: Date.now(),
    title: 'iPhone 12 Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    images: ['https://picsum.photos/640/640?' + Math.random()],
  },
];
