'use client';

import {
  Box,
  Card,
  Flex,
  Group,
  Stack,
  Text,
  Title,
  UnstyledButton,
} from '@mantine/core';
import { Pencil, Trash } from '@phosphor-icons/react/dist/ssr';
import { useDisclosure } from '@mantine/hooks';

import Tag from '../../Tag';
import AddressForm from '@/components/page/accounts/my-address/AddressForm';
import { Address } from '@/types/address';
import ConfirmationModal from '../../modal/ConfirmationModal';
import IconStyler from '@/app/(common)/IconStyler';

type Props = {
  address: Address;
  showActions?: boolean;
  showDetailInSameRow?: boolean;
  activeCard?: boolean;
  handleCardClick?: () => void;
};

const AddressCard = ({
  address,
  showActions,
  showDetailInSameRow = false,
  activeCard = false,
  handleCardClick,
}: Props) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [openedDelete, { open: openDelete, close: closeDelete }] =
    useDisclosure(false);

  return (
    <>
      <Card
        p={16}
        withBorder
        className={`border-2 rounded-none cursor-pointer ${activeCard ? 'border-3' : ''}`}
        onClick={() => {
          handleCardClick && handleCardClick();
        }}
      >
        <Stack gap={12}>
          <Flex justify={'space-between'} gap={4} align={'center'}>
            <Title order={4} c={'neutral.10'}>
              {address?.name}
            </Title>

            {showActions ? (
              <Group gap={8}>
                <IconStyler>
                  <Pencil size={20} className="cursor-pointer" onClick={open} />
                </IconStyler>

                <IconStyler>
                  <Trash
                    size={20}
                    className="cursor-pointer"
                    onClick={openDelete}
                  />
                </IconStyler>
              </Group>
            ) : null}
          </Flex>

          <Group
            gap={4}
            align={showDetailInSameRow ? 'center' : 'flex-end'}
            justify="space-between"
          >
            <Flex direction={showDetailInSameRow ? 'row' : 'column'} gap={6}>
              <Text className="body-2" c={'neutral.6'}>
                {address?.streetAddress}, {address?.city}
              </Text>

              <Text className="body-2" c={'neutral.6'}>
                {address?.phoneNumber}
              </Text>
            </Flex>

            {address?.isDefault ? (
              <Tag text="DEFAULT" />
            ) : (
              <>
                {showActions ? (
                  <UnstyledButton
                    variant="transparent"
                    className="tag-text"
                    c={'primary'}
                  >
                    Set Default
                  </UnstyledButton>
                ) : null}
              </>
            )}
          </Group>
        </Stack>
      </Card>

      <AddressForm opened={opened} close={close} address={address} />

      <ConfirmationModal
        opened={openedDelete}
        close={closeDelete}
        title="Are you sure you want to delete?"
        description="You wont be able to revert this"
        type="delete"
        btnLabel="Delete"
        showImage
      />
    </>
  );
};

export default AddressCard;
