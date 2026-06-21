import { MapPinLine, Phone } from '@phosphor-icons/react/dist/ssr';

export const GOOGLE_MAP_URL =
  'https://maps.google.com/maps?q=Tikkuraitti+13,+01300+Vantaa,+Finland&hl=en&z=15&output=embed';

export const CONTACT_US_DETAILS = [
  {
    id: 1,
    icon: MapPinLine,
    value: [
      {
        data: 'Tikkuraitti 13, Vantaa, Finland, 01300',
      },
    ],
  },
  {
    id: 2,
    icon: Phone,
    value: [
      {
        data: '044 3011077',
        link: 'tel:+358443011077',
      },
    ],
  },
];
