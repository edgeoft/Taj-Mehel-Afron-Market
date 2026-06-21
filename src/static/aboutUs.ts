import { images } from '@/assets';
import { TBreadCrumb } from '@/types/generic';

export const aboutUsBreadCrumb: TBreadCrumb = [
  { id: '1', title: 'Home', href: '/' },
  { id: '2', title: 'About Us' },
];

export const logos = [
  { id: 1, img: images.logo1Img },
  { id: 2, img: images.logo2Img },
  { id: 3, img: images.logo3Img },
  { id: 4, img: images.logo4Img },
  { id: 5, img: images.logo5Img },
  { id: 6, img: images.logo6Img },
  { id: 7, img: images.logo7Img },
  { id: 8, img: images.logo8Img },
  { id: 9, img: images.logo9Img },
];

export const customerReviews = [
  {
    id: 1,
    name: 'Priya Sharma',
    img: images.productImgOne,
    review: `Taj Mehal Afro-Asian Market has been a lifesaver for our family in Vantaa. Fresh spices, quality rice and friendly service every time we order. Truly authentic Afro-Asian groceries!`,
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    img: images.productImgFour,
    review: `Shopping for Indian groceries online has never been this easy. Great product range, fair prices and reliable delivery to Espoo. I recommend them to everyone in the Indian community.`,
  },
  {
    id: 3,
    name: 'Anita Patel',
    img: images.productImgFive,
    review: `The store at Tikkuraitti is wonderful and their delivery across Uusimaa is excellent. From dal to masala, everything tastes just like home. Thank you Taj Mehal Afro-Asian Market!`,
  },
  {
    id: 4,
    name: 'Vikram Singh',
    img: images.productImgEight,
    review: `I ordered a full monthly grocery basket and everything arrived well packed and on time. The quality of basmati and spices is top notch. Will order again.`,
  },
  {
    id: 5,
    name: 'Meera Nair',
    img: images.productImgThree,
    review: `Clean website, easy checkout and genuine products. Taj Mehal Afro-Asian Market is my trusted source for Afro-Asian food in Finland. The team is always helpful on the phone too.`,
  },
];
