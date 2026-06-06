import { images } from '@/assets';
import { TBreadCrumb } from '@/types/generic';

export const breadCrumb: TBreadCrumb = [
  { id: '1', title: 'Home', href: '/' },
  {
    id: '2',
    title: 'Sofa',
  },
  {
    id: '3',
    title: 'King Sofa',
  },
];

export const activeProductInfo = {
  name: 'Single Designer Sofa',
  image: [
    { name: 'Image One', src: images.productImgOne },
    { name: 'Image Two', src: images.productImgTwo },
    { name: 'Image Three', src: images.productImgThree },
    { name: 'Image Four', src: images.productImgFour },
    { name: 'Image One', src: images.productImgOne },
    { name: 'Image Two', src: images.productImgTwo },
    { name: 'Image Three', src: images.productImgThree },
    { name: 'Image Four', src: images.productImgFour },
  ],
};

export const availableColors = [
  {
    name: 'Red',
    color: '#FF0000',
  },
  {
    name: 'Green',
    color: 'green',
  },
  {
    name: 'Blue',
    color: 'blue',
  },
];

export const availableSizes = [
  {
    name: '13x24',
  },
  {
    name: '16x24',
  },
  {
    name: '20x24',
  },
];

export const productInfoTabs = [
  {
    label: 'Product Description',
    value: 'productDesc',
  },
  {
    label: 'Product Specification',
    value: 'productSpecs',
  },
  {
    label: 'Review(123)',
    value: 'review',
  },
];

export const productSpecData = [
  {
    label: 'Brand',
    value: 'No Brand',
  },
  {
    label: 'SKU',
    value: '12313514351235134',
  },
  {
    label: 'Wood',
    value: 'Rosewood',
  },
];

export const productReviewData = [
  {
    name: 'Kristin Watson',
    profile: images.productImgOne,
    rating: 4,
    review: `This sofa exceeded my expectations! The cushions are plush yet supportive, and the fabric is soft to the touch. It adds a modern, stylish look to my living room, and I’ve received so many compliments from guests. Highly recommend!`,
  },
  {
    name: 'Jacob Jones',
    profile: images.productImgTwo,
    rating: 4,
    review: `I was worried this sofa might be too big for my apartment, but it’s the perfect size. It’s compact yet spacious enough to lounge on comfortably. The color is exactly as pictured, and it’s easy to clean. Very satisfied with this purchase.`,
  },
  {
    name: 'Jane Cooper',
    profile: images.productImgThree,
    rating: 4,
    review: `For the price, this sofa is an amazing deal. The build quality is solid, and it feels sturdy. The fabric is durable, and the design is both functional and attractive. It’s comfortable enough for daily use, and I’m very happy with my purchase.`,
  },
];
