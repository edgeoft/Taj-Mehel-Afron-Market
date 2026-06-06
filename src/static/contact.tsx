import { Envelope, MapPinLine, Phone } from '@phosphor-icons/react/dist/ssr';

export const GOOGLE_MAP_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.237819613169!2d85.32570927607814!3d27.67904362673814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18e2c22171e9%3A0x1bb37a6dfc3792a9!2sAsterdio%20Inc.!5e0!3m2!1sen!2snp!4v1706008605631!5m2!1sen!2snp';

export const CONTACT_US_DETAILS = [
  {
    id: 1,
    icon: MapPinLine,
    value: [
      {
        data: 'Maharajgunj, Kathmandu',
      },
    ],
  },
  {
    id: 2,
    icon: Envelope,
    value: [
      {
        data: 'help@furnitech.com',
        link: 'mailto:help@furnitech.com',
      },
    ],
  },
  {
    id: 3,
    icon: Phone,
    value: [
      {
        data: '9898989898',
        link: 'tel:9898989898',
      },
      {
        data: '01 - 5344556',
        link: 'tel:015344556',
      },
    ],
  },
];
