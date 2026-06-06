import OrderCard from '@/components/common/card/OrderCard';
import Paginate from '@/components/common/Paginate';
import { orders } from '@/static/order';
import { Flex, SimpleGrid } from '@mantine/core';

type Props = {};

const MobileOrderListing = ({}: Props) => {
  return (
    <SimpleGrid cols={1} verticalSpacing={32}>
      {orders.map((order) => (
        <OrderCard key={order?.id} order={order} />
      ))}

      <Flex justify={'center'} w={'100%'}>
        <Paginate total={4} />
      </Flex>
    </SimpleGrid>
  );
};

export default MobileOrderListing;
