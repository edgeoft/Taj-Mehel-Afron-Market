import { images } from '@/assets';

export const features = [
  {
    id: 1,
    title: 'Value for money',
    description: 'We offer competitive prices on thousand of items.',
    icon: 'currency-circle-dollar',
  },
  {
    id: 2,
    title: 'Fast delivery',
    description: 'Quick delivery to get your items to you faster.',
    icon: 'truck',
  },
  {
    id: 3,
    title: 'Easy payments',
    description: 'Flexible payment plans to suit your budget.',
    icon: 'credit-card',
  },
  {
    id: 4,
    title: 'Seamless Online Shopping',
    description: 'Smooth browsing and secure checkout experience.',
    icon: 'laptop',
  },
  {
    id: 5,
    title: 'Warranty & Protection',
    description: 'Peace of mind with every purchase.',
    icon: 'thumbs-up',
  },
];

export const offers = [
  {
    id: 1,
    category: 'Bedroom',
    title: '20% off on bedroom furnitures',
    offerTill: 'Sept',
    image: images.offerImgOne,
    link: '/bedroom',
  },
  {
    id: 2,
    category: 'Mobiles & Tablets',
    title: '10% off on mobile accessories',
    offerTill: 'June',
    image: images.offerImgTwo,
    link: '/mobileAndTablets',
  },
  {
    id: 3,
    category: 'Computers & Laptops',
    title: 'Freebies on every laptop purchase',
    offerTill: 'Sept',
    image: images.offerImgThree,
    link: '/computerAndLaptops',
  },
];

export const newArrivalsTabs = [
  {
    label: 'Furniture',
    value: 'furniture',
  },
  {
    label: 'Electronics',
    value: 'electronics',
  },
];

export const banners = [
  {
    id: 1,
    tag: 'Summer Sale is here',
    title: '30% Off on Designer Sofa',
    description: 'Grab your designer sofa before July!',
    image: images.bannerOne,
  },
  {
    id: 2,
    tag: 'Festive Sale is here',
    title: '20% Off on Dinner Set',
    description: 'Grab your dinner set before September!',
    image: images.bannerFour,
  },
  {
    id: 3,
    tag: 'Bulk Sale is here',
    title: '20% Off on Bedroom',
    description: 'Grab your bedroom set before September!',
    image: images.bannerTwo,
  },
  {
    id: 4,
    tag: 'Festive Sale is here',
    title: '20% Off on Mobile Phone',
    description: 'Grab your Mobile set before January!',
    image: images.bannerThree,
  },
];
