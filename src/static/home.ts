import { images } from '@/assets';

export const features = [
  {
    id: 1,
    title: 'Authentic products',
    description: 'Genuine Indian brands and ingredients you know and trust.',
    icon: 'currency-circle-dollar',
  },
  {
    id: 2,
    title: 'Fast delivery',
    description: 'Same-day and next-day delivery across Helsinki metro area.',
    icon: 'truck',
  },
  {
    id: 3,
    title: 'Easy payments',
    description: 'Secure checkout with cards and popular payment methods.',
    icon: 'credit-card',
  },
  {
    id: 4,
    title: 'Fresh & quality',
    description: 'Carefully sourced groceries with quality you can taste.',
    icon: 'laptop',
  },
  {
    id: 5,
    title: 'Friendly service',
    description: 'Personal support from our team at Hakaniemi, Helsinki.',
    icon: 'thumbs-up',
  },
];

export const offers = [
  {
    id: 1,
    category: 'Fresh Vegetables',
    title: '15% off on fresh herbs & greens',
    offerTill: 'Jun',
    image: images.offerImgOne,
    link: '/categories/fresh-vegetables',
  },
  {
    id: 2,
    category: 'Nepalese Products',
    title: '10% off on gundruk & sel roti mix',
    offerTill: 'Jun',
    image: images.offerImgTwo,
    link: '/categories/nepalese-products',
  },
  {
    id: 3,
    category: 'Asian Products',
    title: 'Buy 2 get 1 on select Asian sauces',
    offerTill: 'Jul',
    image: images.offerImgThree,
    link: '/categories/asian-products',
  },
];

export const newArrivalsTabs = [
  { label: 'Staples', value: 'staples' },
  { label: 'Fresh & Asian', value: 'fresh-asian' },
];

export const banners = [
  {
    id: 1,
    tag: 'Namaste! Welcome to Our Store.',
    title: 'Your Trusted Indian Grocery Store',
    description:
      'Spices, rice, lentils and more - delivered across Uusimaa Region.',
    image: images.bannerOne,
  },
  {
    id: 2,
    tag: 'Fresh Produce',
    title: 'Fresh Vegetables & Everyday Essentials',
    description:
      'Shop fresh vegetables, herbs, fruits, and authentic ingredients for your favorite Indian recipes.',
    image: images.bannerFour,
  },
  {
    id: 3,
    tag: 'Now Open in Hakaniemi',
    title: 'Authentic Indian Groceries in Helsinki',
    description:
      'Your one-stop destination for Indian spices, groceries, fresh produce, and everyday essentials.',
    image: images.bannerTwo,
  },
  {
    id: 4,
    tag: 'Fresh arrivals',
    title: 'New Spices & Masalas',
    description: 'Discover fresh arrivals from trusted Indian brands.',
    image: images.bannerThree,
  },
];
