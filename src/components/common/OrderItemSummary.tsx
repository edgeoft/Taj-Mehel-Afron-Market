import { formatPriceInRs } from '@/utils/price';
import { Divider, Flex, Text, Title } from '@mantine/core';
import React from 'react';

type Props = {
  subTotal: number;
  deliveryCharge: number;
  total: number;
};

const OrderItemSummary = ({ subTotal, deliveryCharge, total }: Props) => {
  const summary = [
    {
      id: 1,
      label: 'Subtotal',
      value: subTotal,
    },
    {
      id: 2,
      label: 'Delivery Charge',
      value: deliveryCharge,
    },
    {
      id: 3,
      label: 'Total',
      value: total,
    },
  ];
  return (
    <Flex direction={'column'} align={'flex-end'} gap={8}>
      {summary?.map((data) => (
        <Flex
          key={data.id}
          justify={'space-between'}
          align={'center'}
          gap={8}
          w={206}
          ml={'auto'}
        >
          <Title order={6} c={'neutral.9'}>
            {data?.label}
          </Title>
          <Text className="body-2" c={'neutral.10'}>
            {formatPriceInRs(data?.value)}
          </Text>
        </Flex>
      ))}
      <Divider w={206} ml={'auto'} mt={0} mb={0} color={'neutral.3'} />
    </Flex>
  );
};

export default OrderItemSummary;
