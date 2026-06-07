import { images } from '@/assets';
import { TBreadCrumb } from '@/types/generic';

export const breadCrumb: TBreadCrumb = [
  { id: '1', title: 'Home', href: '/' },
  { id: '2', title: 'Rice & Grains' },
  { id: '3', title: 'Daawat' },
];

export const activeProductInfo = {
  name: 'Daawat',
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
  { name: '1 kg', color: '#FF9933' },
  { name: '2 kg', color: '#138808' },
  { name: '5 kg', color: '#212121' },
];

export const availableSizes = [
  { name: '1 kg' },
  { name: '2 kg' },
  { name: '5 kg' },
];

export const productInfoTabs = [
  { label: 'Product Description', value: 'productDesc' },
  { label: 'Product Specification', value: 'productSpecs' },
  { label: 'Review(123)', value: 'review' },
];

export const productSpecData = [
  { label: 'Brand', value: 'India Gate' },
  { label: 'SKU', value: 'NIM-RICE-BAS-5KG' },
  { label: 'Origin', value: 'India' },
  { label: 'Weight', value: '5 kg' },
  { label: 'Storage', value: 'Store in a cool, dry place' },
];

export const productReviewData = [
  {
    name: 'Priya Sharma',
    profile: images.productImgOne,
    rating: 5,
    review: `The basmati rice is excellent — long grains and wonderful aroma. Perfect for biryani. Delivery to Espoo was fast and the packaging was neat.`,
  },
  {
    name: 'Rajesh Kumar',
    profile: images.productImgTwo,
    rating: 5,
    review: `Finally found authentic Indian groceries in Helsinki! The quality is consistent and prices are fair. Namaste Indian Market is now my go-to store.`,
  },
  {
    name: 'Anita Patel',
    profile: images.productImgThree,
    rating: 4,
    review: `Great selection of spices and staples. The team at Hakaniemi is very helpful. Highly recommend for anyone missing home flavours in Finland.`,
  },
];
