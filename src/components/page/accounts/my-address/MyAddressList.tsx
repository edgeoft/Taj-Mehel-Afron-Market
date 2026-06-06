import { SimpleGrid } from '@mantine/core';

import AddressCard from '@/components/common/card/AddressCard';
import { addresses } from '@/static/address';
import AddAddressCard from '@/components/common/card/AddressCard/AddAddressCard';

type Props = {};

const MyAddressList = ({}: Props) => {
  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2, xl: 3 }}
      spacing={16}
      verticalSpacing={24}
    >
      {addresses?.length
        ? addresses?.map((address) => (
            <AddressCard key={address.id} address={address} showActions />
          ))
        : null}

      <AddAddressCard />
    </SimpleGrid>
  );
};

export default MyAddressList;
