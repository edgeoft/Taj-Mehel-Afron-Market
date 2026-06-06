export type Address = {
  id: number;
  name: string;
  phoneCode: string;
  phoneNumber: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode?: string;
  isDefault?: boolean;
};

export type AddressCardType = Omit<Address, 'state' | 'zipCode'>;
