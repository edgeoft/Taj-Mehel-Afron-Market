import { orderDetail } from '@/static/order';
import { Divider, Flex, Title } from '@mantine/core';
import OrderItem from './OrderItem';
import OrderItemSummary from '@/components/common/OrderItemSummary';

type Props = {};

const OrderProductListing = ({}: Props) => {
  return (
    <Flex direction={'column'} gap={{ base: 16, md: 40 }}>
      {orderDetail?.orderItems?.map((orderItem) => (
        <Flex key={orderItem?.sellerName} direction={'column'} gap={40}>
          <Flex direction={'column'} gap={{ base: 8, md: 16 }}>
            <Title order={4} c={'neutral.9'}>
              {orderItem?.sellerName}
            </Title>

            <Divider />

            {orderItem?.products?.map((item) => (
              <OrderItem key={item.id} orderItem={item} />
            ))}

            <OrderItemSummary
              subTotal={orderItem?.subTotal}
              deliveryCharge={orderItem?.deliveryCharge}
              total={orderItem?.total}
            />
          </Flex>
        </Flex>
      ))}

      <Divider />
    </Flex>
  );
};

export default OrderProductListing;
