import { Order } from '@/types/order';
import {
  Button,
  Card,
  Flex,
  Grid,
  GridCol,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import dayjs from 'dayjs';

import { ReactNode } from 'react';
import StatusButton from '../StatusButton';
import { formatPriceInRs } from '@/utils/price';
import Link from 'next/link';

const RenderWithLabel = ({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) => {
  return (
    <Flex gap={4} direction={'column'}>
      <Text className="font-size-12 font-bold" c={'neutral.10'}>
        {label}
      </Text>
      {children}
    </Flex>
  );
};

type Props = {
  order: Order;
};

const OrderCard = ({ order }: Props) => {
  const price = formatPriceInRs(Number(order?.total));

  const orderDetail = [
    {
      id: 1,
      label: 'Order ID',
      value: (
        <Text className="font-size-12" c={'neutral.9'}>
          #{order?.orderId}
        </Text>
      ),
    },
    {
      id: 2,
      label: 'Placed On',
      value: (
        <Text className="font-size-12" c={'neutral.9'}>
          {dayjs(order?.createdAt).format('DD/MM/YYYY, hh:mm A')}
        </Text>
      ),
    },
    {
      id: 3,
      label: 'Status',
      value: <StatusButton status={order?.status} />,
    },
    {
      id: 4,
      label: 'Items',
      value: (
        <Text className="font-size-12" c={'neutral.9'}>
          {order?.items}
        </Text>
      ),
    },
  ];

  return (
    <Card withBorder className="border-2 rounded-none" p={16}>
      <Stack gap={12}>
        <SimpleGrid cols={2} spacing={12} verticalSpacing={12}>
          {orderDetail?.map((order) => (
            <RenderWithLabel label={order?.label} key={order?.id}>
              {order?.value}
            </RenderWithLabel>
          ))}
        </SimpleGrid>

        <Flex justify={'space-between'} gap={4} align={'flex-end'}>
          <Title order={4} c="neutral.9">
            {price}
          </Title>

          <Link href={`/accounts/my-orders/${order?.orderId}`} passHref>
            <Button variant="secondary-transparent">View Order</Button>
          </Link>
        </Flex>
      </Stack>
    </Card>
  );
};

export default OrderCard;
