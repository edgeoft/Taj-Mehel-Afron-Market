import OrderItemSummary from '@/components/common/OrderItemSummary';
import { TCartData, TCartItem } from '@/types/cart';
import { Checkbox, Divider, Flex, Text, Title } from '@mantine/core';
import React from 'react';
import CartItem from './CartItem';
type TCartLeftProps = {
  cartItem?: TCartData;
};

const CartLeftSection = ({ cartItem }: TCartLeftProps) => {
  return (
    <>
      <Flex justify={'flex-start'} align={'center'} gap={8}>
        <Checkbox className="myCart-checkbox" />
        <Flex justify={'flex-start'} align={'center'} gap={4}>
          <Title order={5} c={'neutral.9'}>
            Seller:
          </Title>
          <Text className="body-2" c={'neutral.9'}>
            {cartItem?.seller}
          </Text>
        </Flex>
      </Flex>

      <Divider
        mt={{ base: 8, md: 16 }}
        mb={{ base: 16, md: 16 }}
        color={'neutral.3'}
      />
      {cartItem?.items.map((productData: TCartItem, index: number) => (
        <React.Fragment key={index}>
          <CartItem productData={productData} />
        </React.Fragment>
      ))}

      <OrderItemSummary
        subTotal={2000}
        deliveryCharge={cartItem?.deliveryCharge ?? 0}
        total={2100}
      />
    </>
  );
};

export default CartLeftSection;
