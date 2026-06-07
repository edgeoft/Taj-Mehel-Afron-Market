'use client';

import {
  Accordion,
  AccordionControl,
  AccordionItem,
  AccordionPanel,
  Box,
  BoxComponentProps,
  Button,
  Divider,
  Flex,
  Group,
  SelectProps,
  Text,
  Title,
} from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { CaretUp } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import { useState } from 'react';
import OrderPlacedContent from '../page/checkout/OrderPlacedContent';
import DiscountCode from './DiscountCode';
import ModalDrawerContainer from './modal/ModalDrawerContainer';

interface TOrderSummaryProps extends BoxComponentProps {
  page?: 'cart' | 'checkout';
}

export const ORDER_INFO = [
  {
    label: 'Subtotal',
    value: '€42,45',
  },
  {
    label: 'Discount',
    value: '€4,00',
  },
  {
    label: 'Delivery',
    value: '€4,99',
  },
];

export default function OrderSummary(props: TOrderSummaryProps) {
  const isLargeScreen = useMediaQuery('(min-width: 768px)');
  const [value, setValue] = useState('Order Summary');
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Box className="orderSummary-container" {...props}>
        <Accordion
          defaultValue="Order Summary"
          className="orderSummary-accordion"
          value={!isLargeScreen ? value : 'Order Summary'}
          chevron={<CaretUp size={20} />}
          onChange={(data: any) =>
            !isLargeScreen ? setValue(data) : undefined
          }
        >
          <AccordionItem value={'Order Summary'}>
            <AccordionControl>Order Summary</AccordionControl>
            <AccordionPanel>
              <DiscountCode />
              <Divider my={16} color={'neutral.3'} />
              {ORDER_INFO.map((item, index) => (
                <Flex
                  key={index}
                  justify={'space-between'}
                  align={'center'}
                  mb={12}
                >
                  <Text className="body-2" c={'nuetral.7'}>
                    {item.label}
                  </Text>
                  <Text className="body-1" c={'neutral.10'}>
                    {item.value}
                  </Text>
                </Flex>
              ))}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Flex justify={'space-between'} align={'center'}>
          <Title order={4}>Total</Title>
          <Title order={3}>€43,44</Title>
        </Flex>
        <Divider my={16} color={'neutral.3'} />
        {props.page === 'cart' && (
          <Link href={'/checkout'} passHref>
            <Button className="w-full">Place Checkout</Button>
          </Link>
        )}
        {props.page === 'checkout' && (
          <Button className="w-full" onClick={open}>
            Place Order
          </Button>
        )}
      </Box>
      <ModalDrawerContainer
        title={null}
        close={close}
        opened={opened}
        drawerSize={440}
        hideCloseButton
        styles={{
          body: {
            padding: 0,
          },
        }}
        className="checkout-drawer"
      >
        <OrderPlacedContent />
      </ModalDrawerContainer>
    </>
  );
}
