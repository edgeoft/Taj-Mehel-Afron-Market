import { IconProps } from '@phosphor-icons/react';
import {
  Heart,
  MapPin,
  Package,
  SignOut,
  User,
} from '@phosphor-icons/react/dist/ssr';

export const getIconFromText = (icon: string, props?: IconProps) => {
  switch (icon) {
    case 'user':
      return <User {...props} />;
    case 'map-pin':
      return <MapPin {...props} />;
    case 'package':
      return <Package {...props} />;
    case 'heart':
      return <Heart {...props} />;
    case 'signout':
      return <SignOut {...props} />;
  }
};
