import { Envelope, MapPinLine, Phone } from '@phosphor-icons/react/dist/ssr';

export const GOOGLE_MAP_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1982.5!2d24.949!3d60.179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sHakaniemi%20torikatu%202%2C%2000530%20Helsinki!5e0!3m2!1sen!2sfi!4v1706008605631!5m2!1sen!2sfi';

export const CONTACT_US_DETAILS = [
  {
    id: 1,
    icon: MapPinLine,
    value: [
      {
        data: 'Hakaniemi torikatu 2, 00530 Helsinki, Finland',
      },
    ],
  },
  {
    id: 2,
    icon: Envelope,
    value: [
      {
        data: 'namaste.indianmarket@gmail.com',
        link: 'mailto:namaste.indianmarket@gmail.com',
      },
    ],
  },
  {
    id: 3,
    icon: Phone,
    value: [
      {
        data: '040 815 1341',
        link: 'tel:+358408151341',
      },
    ],
  },
];
