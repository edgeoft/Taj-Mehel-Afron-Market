'use client';

import { Button, Card, Flex } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Plus } from '@phosphor-icons/react/dist/ssr';

import AddressForm from '@/components/page/accounts/my-address/AddressForm';
import ConfirmationModal from '../../modal/ConfirmationModal';

type Props = {
  label?: string;
  minHeight?: number;
  handleCardClick?: () => void;
};

const AddAddressCard = ({
  label = 'Add Address',
  minHeight = 113,
  handleCardClick,
}: Props) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Card
        p={16}
        withBorder
        className="border rounded-none cursor-pointer"
        mih={minHeight}
        onClick={() => {
          open();
          handleCardClick && handleCardClick();
        }}
      >
        <Flex justify={'center'} align={'center'} h={'100%'}>
          <Button leftSection={<Plus />} variant="transparent">
            {label}
          </Button>
        </Flex>
      </Card>

      <AddressForm opened={opened} close={close} />
    </>
  );
};

export default AddAddressCard;
