import { images } from '@/assets';
import {
  asianProducts,
  freshVegetableProducts,
  indianSpecialtyProducts,
  products,
} from './product';

export const categories = [
  { id: 1, name: 'Rice & Grains', image: images.categoryImgOne },
  { id: 2, name: 'Lentils & Pulses', image: images.categoryImgTwo },
  { id: 3, name: 'Spices & Masalas', image: images.categoryImgThree },
  { id: 4, name: 'Snacks & Namkeen', image: images.categoryImgFour },
  { id: 5, name: 'Pickles & Chutneys', image: images.categoryImgFive },
  { id: 6, name: 'Beverages', image: images.categoryImgSix },
  { id: 7, name: 'Indian Products', image: images.categoryImgSeven },
  { id: 8, name: 'Asian Products', image: images.categoryImgEight },
  { id: 9, name: 'Fresh Vegetables', image: images.categoryImgNine },
  { id: 10, name: 'Dairy & Refrigerated', image: images.categoryImgTen },
];

export const categoryProductsSection = [
  {
    id: 1,
    title: 'New Arrivals',
    description: 'Fresh picks from our latest grocery collection',
    link: '/products',
    products: [...products, ...products.slice(0, 4)],
  },
  {
    id: 2,
    title: 'Rice & Grains',
    description: 'Premium basmati, sona masoori and everyday rice and grains',
    link: '/products?categoryIds=Rice%20%26%20Grains',
    products: [...products.slice(0, 4), ...products.slice(0, 4)],
  },
  {
    id: 3,
    title: 'Indian Products',
    description:
      'Authentic gundruk, sel roti mix, dal bhat and Indian favourites',
    link: '/categories/indian-products',
    products: [...indianSpecialtyProducts, ...indianSpecialtyProducts],
  },
  {
    id: 4,
    title: 'Asian Products',
    description: 'Thai, Japanese, Korean and Chinese groceries',
    link: '/categories/asian-products',
    products: [...asianProducts, ...asianProducts],
  },
  {
    id: 5,
    title: 'Fresh Vegetables',
    description: 'Farm-fresh greens, herbs, chillies and seasonal produce',
    link: '/categories/fresh-vegetables',
    products: [...freshVegetableProducts, ...freshVegetableProducts],
  },
];
