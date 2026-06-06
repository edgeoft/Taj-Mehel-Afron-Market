//Need to remove this dummy date after api integration

import { images } from '@/assets';
import { products } from './product';

export const categories = [
  {
    id: 1,
    name: 'Living Room',
    image: images.categoryImgOne,
  },
  {
    id: 2,
    name: 'Bed Room',
    image: images.categoryImgTwo,
  },
  {
    id: 3,
    name: 'Office',
    image: images.categoryImgThree,
  },
  {
    id: 4,
    name: 'Dining Room',
    image: images.categoryImgFour,
  },
  {
    id: 5,
    name: 'Outdoor',
    image: images.categoryImgFive,
  },
  {
    id: 6,
    name: 'Kids & Nursery',
    image: images.categoryImgSix,
  },
  {
    id: 7,
    name: 'Entryway',
    image: images.categoryImgSix,
  },
  {
    id: 8,
    name: 'Storage',
    image: images.categoryImgFour,
  },
  {
    id: 9,
    name: 'Accent',
    image: images.categoryImgThree,
  },
  {
    id: 10,
    name: 'Home Decor',
    image: images.categoryImgOne,
  },
];

export const categoryProductsSection = [
  {
    id: 1,
    title: 'New Arrivals',
    description: 'Creating your dream home',
    link: '/products',
    products: [...products, ...products],
  },
  {
    id: 2,
    title: 'Living Room',
    description: 'Best furnitures for your living room',
    link: '/products',
    products: [...products, ...products],
  },
  {
    id: 3,
    title: 'Bedroom',
    description: 'Best furnitures for your bedroom',
    link: '/products',
    products: [...products, ...products],
  },
  {
    id: 4,
    title: 'Kitchen',
    description: 'Best furnitures for your kitchen',
    link: '/products',
    products: [...products, ...products],
  },
];
