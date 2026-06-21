import { images } from '@/assets';
import { TBreadCrumb } from '@/types/generic';
import { Product } from '@/types/product';

export const breadCrumb: TBreadCrumb = [
  { id: '1', title: 'Home', href: '/' },
  {
    id: '2',
    title: 'Groceries',
    href: '/categories/groceries',
  },
  {
    id: '3',
    title: 'Rice & Grains',
  },
];

const indianProducts: Product[] = [
  {
    id: 1,
    name: 'Daawat',
    category: 'Rice & Grains',
    description:
      'Premium aged basmati rice with long grains — perfect for biryani, pulao and everyday meals.',
    price: '14.99',
    discountedPrice: '12.99',
    discountPercent: 13,
    rating: 4.8,
    noOfRating: 124,
    image: [images.productImgOne],
  },
  {
    id: 2,
    name: 'Sona Mansoori Rice',
    category: 'Spices & Masalas',
    description:
      'Aromatic blend of ground spices for curries, dals and traditional Indian cooking.',
    price: '3.49',
    discountPercent: 0,
    rating: 4.9,
    noOfRating: 89,
    image: [images.productImgTwo],
  },
  {
    id: 3,
    name: 'Kala chana',
    category: 'Lentils & Pulses',
    description:
      'High-quality toor dal for sambar, dal tadka and everyday home cooking.',
    price: '5.99',
    discountedPrice: '4.99',
    discountPercent: 17,
    rating: 4.7,
    noOfRating: 56,
    image: [images.productImgThree],
  },
  {
    id: 4,
    name: 'Wai Wai ',
    category: 'Snacks & Namkeen',
    description:
      'Crispy and savoury Indian snack — ideal for tea time or festive gatherings.',
    price: '2.99',
    discountPercent: 0,
    rating: 4.6,
    noOfRating: 42,
    image: [images.productImgFour],
  },
];

export const indianSpecialtyProducts: Product[] = [
  {
    id: 101,
    name: '2PM Hot & Spicy Cracker',
    category: 'Indian Products',
    description:
      'Traditional fermented leafy greens — essential for Indian gundruk soup and curries.',
    price: '4.99',
    discountedPrice: '3.99',
    discountPercent: 20,
    rating: 4.8,
    noOfRating: 67,
    image: [images.productImgFive],
  },
  {
    id: 102,
    name: 'BB Red Label Tea',
    category: 'Indian Products',
    description:
      'Ready-to-use flour mix for authentic sel roti — a festive Indian ring-shaped bread.',
    price: '3.49',
    discountPercent: 0,
    rating: 4.7,
    noOfRating: 45,
    image: [images.productImgSix],
  },
  {
    id: 103,
    name: 'Birds Eye Chilli',
    category: 'Indian Products',
    description:
      'Combo pack of rice, lentils and spices for a classic Indian dal bhat meal.',
    price: '11.99',
    discountedPrice: '9.99',
    discountPercent: 17,
    rating: 4.9,
    noOfRating: 88,
    image: [images.productImgSeven],
  },
  {
    id: 104,
    name: 'CENTURY Momo Masala',
    category: 'Indian Products',
    description:
      'Spicy and tangy Indian pickle blend — perfect with dal bhat and snacks.',
    price: '3.99',
    discountPercent: 0,
    rating: 4.6,
    noOfRating: 52,
    image: [images.productImgEight],
  },
];

export const asianProducts: Product[] = [
  {
    id: 201,
    name: 'Thai Red Curry Paste',
    category: 'Asian Products',
    description:
      'Authentic Thai red curry paste for rich, aromatic curries in minutes.',
    price: '2.99',
    discountPercent: 0,
    rating: 4.7,
    noOfRating: 74,
    image: [images.productImgOne],
  },
  {
    id: 202,
    name: 'Japanese Soba Noodles',
    category: 'Asian Products',
    description:
      'Premium buckwheat soba noodles — ideal for hot soups or cold salads.',
    price: '3.49',
    discountedPrice: '2.99',
    discountPercent: 14,
    rating: 4.8,
    noOfRating: 61,
    image: [images.productImgTwo],
  },
  {
    id: 203,
    name: 'Korean Kimchi (Spicy)',
    category: 'Asian Products',
    description:
      'Traditional fermented kimchi with bold spice — a staple of Korean cuisine.',
    price: '5.99',
    discountPercent: 0,
    rating: 4.9,
    noOfRating: 93,
    image: [images.productImgThree],
  },
  {
    id: 204,
    name: 'Chinese Sesame Oil',
    category: 'Asian Products',
    description:
      'Toasted sesame oil for stir-fries, dumplings and finishing Asian dishes.',
    price: '4.49',
    discountPercent: 0,
    rating: 4.6,
    noOfRating: 48,
    image: [images.productImgFour],
  },
];

export const freshVegetableProducts: Product[] = [
  {
    id: 301,
    name: 'Fresh Coriander Bunch',
    category: 'Fresh Vegetables',
    description:
      'Aromatic fresh coriander — essential for curries, chutneys and garnishing.',
    price: '1.49',
    discountPercent: 0,
    rating: 4.8,
    noOfRating: 112,
    image: [images.categoryImgOne],
  },
  {
    id: 302,
    name: 'Fresh Ginger (250 g)',
    category: 'Fresh Vegetables',
    description:
      'Firm, fragrant ginger root for chai, curries and Asian cooking.',
    price: '2.49',
    discountPercent: 0,
    rating: 4.7,
    noOfRating: 86,
    image: [images.categoryImgTwo],
  },
  {
    id: 303,
    name: 'Green Chillies (200 g)',
    category: 'Fresh Vegetables',
    description: 'Fresh green chillies for authentic heat in Indian dishes.',
    price: '1.99',
    discountedPrice: '1.49',
    discountPercent: 25,
    rating: 4.6,
    noOfRating: 64,
    image: [images.categoryImgThree],
  },
  {
    id: 304,
    name: 'Fresh Spinach (250 g)',
    category: 'Fresh Vegetables',
    description:
      'Tender leafy spinach for saag, salads and everyday healthy cooking.',
    price: '2.99',
    discountPercent: 0,
    rating: 4.5,
    noOfRating: 58,
    image: [images.categoryImgFour],
  },
];

export const newArrivalGroceries: Product[] = [
  {
    id: 401,
    name: 'Daawat Basmati Rice 1 kg',
    category: 'Rice & Grains',
    description:
      'Premium aged basmati rice with long grains — perfect for biryani and everyday meals.',
    price: '14.99',
    discountedPrice: '12.99',
    discountPercent: 13,
    rating: 4.8,
    noOfRating: 124,
    image: [images.productImgOne],
  },
  {
    id: 402,
    name: 'MDH Garam Masala 100 g',
    category: 'Spices & Masalas',
    description:
      'Classic garam masala blend for curries, rice dishes and home cooking.',
    price: '3.49',
    discountPercent: 0,
    rating: 4.9,
    noOfRating: 89,
    image: [images.productImgTwo],
  },
  {
    id: 403,
    name: 'Kala Chana 1 kg',
    category: 'Lentils & Pulses',
    description:
      'Black chickpeas for chana masala, salads and protein-rich meals.',
    price: '5.99',
    discountedPrice: '4.99',
    discountPercent: 17,
    rating: 4.7,
    noOfRating: 56,
    image: [images.productImgThree],
  },
  {
    id: 404,
    name: 'Pakistani Honey Mangoes',
    category: 'Fresh Food',
    description:
      'Sweet and juicy Pakistani honey mangoes — perfect for desserts, lassi and summer treats.',
    price: '8.99',
    discountPercent: 0,
    rating: 4.6,
    noOfRating: 42,
    image: [images.productImgFour],
  },
];

export const newArrivalFreshAsian: Product[] = [
  {
    id: 405,
    name: 'Fresh Plantain (each)',
    category: 'Fresh Vegetables',
    description:
      'Ripe plantain for frying, boiling and West African home cooking.',
    price: '1.99',
    discountPercent: 0,
    rating: 4.8,
    noOfRating: 74,
    image: [images.categoryImgOne],
  },
  {
    id: 406,
    name: 'Fresh Coriander Bunch',
    category: 'Fresh Vegetables',
    description:
      'Aromatic fresh coriander for curries, chutneys and garnishing.',
    price: '1.49',
    discountPercent: 0,
    rating: 4.8,
    noOfRating: 112,
    image: [images.categoryImgTwo],
  },
  {
    id: 407,
    name: 'Thai Kitchen Red Curry Paste',
    category: 'Asian Food',
    description:
      'Authentic Thai red curry paste for rich, aromatic curries in minutes.',
    price: '2.99',
    discountedPrice: '2.49',
    discountPercent: 17,
    rating: 4.7,
    noOfRating: 61,
    image: [images.productImgFive],
  },
  {
    id: 408,
    name: 'Jongga Kimchi 400 g',
    category: 'Asian Food',
    description:
      'Spicy fermented kimchi — a favourite for Korean meals and side dishes.',
    price: '5.99',
    discountPercent: 0,
    rating: 4.9,
    noOfRating: 93,
    image: [images.productImgSix],
  },
];

export const products = [
  ...indianProducts,
  ...indianSpecialtyProducts,
  ...asianProducts,
  ...freshVegetableProducts,
];

const repeatProducts = (items: Product[], count: number): Product[] =>
  Array.from({ length: count }, (_, i) => ({
    ...items[i % items.length],
    id: i + 1,
  }));

export const popularStaples = repeatProducts(indianProducts, 12);

export const popularSnacks = repeatProducts(
  [
    {
      id: 1,
      name: 'Maggi Masala Noodles',
      category: 'Snacks & Namkeen',
      description:
        'Classic masala instant noodles — a quick and tasty favourite.',
      price: '1.29',
      discountedPrice: '0.99',
      discountPercent: 23,
      rating: 4.5,
      noOfRating: 210,
      image: [images.productImgFive],
    },
    {
      id: 2,
      name: 'Tata Tea Premium',
      category: 'Beverages',
      description:
        'Rich and robust Indian tea blend for the perfect morning chai.',
      price: '4.49',
      discountPercent: 0,
      rating: 4.8,
      noOfRating: 95,
      image: [images.productImgSix],
    },
    {
      id: 3,
      name: 'Amul Ghee',
      category: 'Dairy & Refrigerated',
      description:
        'Pure cow ghee for cooking, sweets and authentic Indian flavour.',
      price: '8.99',
      discountedPrice: '7.99',
      discountPercent: 11,
      rating: 4.9,
      noOfRating: 78,
      image: [images.productImgSeven],
    },
    {
      id: 4,
      name: "Mother's Recipe Mango Pickle",
      category: 'Pickles & Chutneys',
      description:
        'Tangy and spicy mango pickle — a staple on every Indian table.',
      price: '3.99',
      discountPercent: 0,
      rating: 4.7,
      noOfRating: 63,
      image: [images.productImgEight],
    },
  ],
  12
);

export const popularIndianSpecialty = repeatProducts(
  indianSpecialtyProducts,
  8
);
export const popularAsian = repeatProducts(asianProducts, 8);
export const popularFreshVegetables = repeatProducts(freshVegetableProducts, 8);

/** @deprecated Use popularStaples */
export const popularFunitures = popularStaples;

/** @deprecated Use popularSnacks */
export const popularElectronics = popularSnacks;

export const sorting = [
  { id: 1, label: 'Featured', value: 'featured' },
  { id: 2, label: 'Latest', value: 'latest' },
  { id: 3, label: 'Most Popular', value: 'most-popular' },
  { id: 4, label: 'Least Popular', value: 'least-popular' },
  { id: 5, label: 'Highest Price', value: 'highest-price' },
  { id: 6, label: 'Lowest Price', value: 'lowest-price' },
];

export const availabilty = [
  { id: 1, label: 'In Stock', value: 'in-stock' },
  { id: 2, label: 'Sale', value: 'sale' },
  { id: 3, label: 'Out Of Stock', value: 'out-of-stock' },
];

export const categories = [
  { id: 1, label: 'Rice & Grains', value: 'rice-grains' },
  { id: 2, label: 'Lentils & Pulses', value: 'lentils-pulses' },
  { id: 3, label: 'Spices & Masalas', value: 'spices-masalas' },
  { id: 4, label: 'Flours & Atta', value: 'flours-atta' },
  { id: 5, label: 'Pickles & Chutneys', value: 'pickles-chutneys' },
  { id: 6, label: 'Snacks & Namkeen', value: 'snacks-namkeen' },
  { id: 7, label: 'Indian Products', value: 'indian-products' },
  { id: 8, label: 'Asian Products', value: 'asian-products' },
  { id: 9, label: 'Fresh Vegetables', value: 'fresh-vegetables' },
];
