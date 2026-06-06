'use client';

import AddressCard from '@/components/common/card/AddressCard';
import AddAddressCard from '@/components/common/card/AddressCard/AddAddressCard';
import Input from '@/components/common/form/Input';
import MobileInput from '@/components/common/form/MobileInput';
import SelectInput from '@/components/common/form/SelectInput';
import { delivery, stateOpt } from '@/static/checkout';
import {
  Accordion,
  AccordionControl,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  Divider,
  Flex,
  SimpleGrid,
  Text,
  Title,
} from '@mantine/core';
import { CaretUp } from '@phosphor-icons/react/dist/ssr';
import { useState } from 'react';

type Props = {};

const CheckoutDeliverySection = ({}: Props) => {
  const [value, setValue] = useState('Delivery Address');
  const [activeCard, setActiveCard] = useState<number | null>(1);

  return (
    <Box className="checkout-orderContainer" mt={16}>
      <Accordion
        defaultValue="Delivery Address"
        className="checkout-delivery-accordion"
        value={value}
        chevron={<CaretUp size={20} />}
        onChange={(data: any) => setValue(data)}
      >
        <AccordionItem value={'Delivery Address'}>
          <AccordionControl>Delivery Address</AccordionControl>
          <AccordionPanel>
            <SimpleGrid
              cols={{ base: 1, sm: 2 }}
              spacing={16}
              verticalSpacing={24}
            >
              {delivery?.length
                ? delivery?.map((address, index) => (
                    <AddressCard
                      key={address.id}
                      address={address}
                      showDetailInSameRow
                      activeCard={activeCard ? activeCard === index + 1 : false}
                      handleCardClick={() => setActiveCard(() => index + 1)}
                    />
                  ))
                : null}

              <AddAddressCard
                label="Use Another address"
                minHeight={84}
                // handleCardClick={() => setActiveCard(null)}
              />
            </SimpleGrid>
            {activeCard && (
              <>
                <Divider my={16} color={'neutral.3'} />

                <SimpleGrid
                  cols={{ base: 1, sm: 2 }}
                  spacing={16}
                  verticalSpacing={{ base: 14, sm: 24 }}
                >
                  <Input
                    label="Full Name"
                    placeholder="Enter your name"
                    value={delivery[activeCard - 1]?.name}
                    required
                    readOnly
                  />
                  <MobileInput
                    label="Mobile"
                    placeholder="Enter mobile number"
                    value={delivery[activeCard - 1]?.phoneNumber}
                    required
                    readOnly
                    className="w-full"
                  />
                  <Input
                    label="Email Address"
                    placeholder="Enter email address"
                    value={delivery[activeCard - 1]?.email}
                    required
                    readOnly
                  />
                  <Input
                    label="Company Name (Optional)"
                    value={delivery[activeCard - 1]?.companyName}
                    placeholder="Enter company name"
                    readOnly
                  />
                </SimpleGrid>

                <Flex
                  justify={'flex-start'}
                  align={'center'}
                  gap={8}
                  my={{ base: 16, sm: 24 }}
                >
                  <Text className="body-2" c={'neutral.8'}>
                    Country / Region :
                  </Text>
                  <Title order={6} className="heading-4 checkout-country">
                    Nepal
                  </Title>
                </Flex>

                <SimpleGrid
                  cols={{ base: 1, sm: 2 }}
                  spacing={16}
                  verticalSpacing={{ base: 14, sm: 24 }}
                >
                  <Input
                    label="Street Address"
                    placeholder="Enter street address"
                    value={delivery[activeCard - 1]?.streetAddress}
                    required
                    readOnly
                  />
                  <Input
                    label="Town/City"
                    placeholder="Enter town or city"
                    value={delivery[activeCard - 1]?.city}
                    required
                    readOnly
                  />
                  <SelectInput
                    label="State/Zone"
                    placeholder="Select State/Zone"
                    data={stateOpt}
                    value={delivery[activeCard - 1]?.state}
                    required
                    readOnly
                  />
                  <Input
                    label="Postal / ZIP (Optional)"
                    placeholder="Enter Postal / ZIP Code"
                    value={delivery[activeCard - 1]?.zipCode}
                    readOnly
                  />
                </SimpleGrid>

                <Checkbox
                  size="xs"
                  mt={16}
                  label="Use same for billing address"
                  className="myCart-checkbox"
                />
              </>
            )}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default CheckoutDeliverySection;
