import { Icon } from '@phosphor-icons/react';

export type ContactDetail = {
  id: number;
  icon: Icon;
  value: {
    data: string;
    link?: string;
  }[];
};
