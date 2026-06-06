import { Box, Card, Stack } from '@mantine/core';

import { images } from '@/assets';
import EmptyPlaceholder from '@/components/common/EmptyPlaceholder';
import FormSectionHeading from '@/components/common/FormSectionHeading';
import OrderFilter from '@/components/page/accounts/my-orders/OrderFilter';
import OrderListing from '@/components/page/accounts/my-orders/OrderListing';
import { Suspense } from 'react';
import MobileOrderListing from '@/components/page/accounts/my-orders/MobileOrderListing';

type Props = {};

const MyOrdersPage = ({}: Props) => {
  return (
    <>
      {[2]?.length ? (
        <Card withBorder w="100%" p={{ base: 16, md: 32 }}>
          <Stack gap={24}>
            <FormSectionHeading title="My Orders" order={3} />

            <Suspense>
              <OrderFilter />
              <Box visibleFrom="md">
                <OrderListing />
              </Box>
              <Box hiddenFrom="md">
                <MobileOrderListing />
              </Box>
            </Suspense>
          </Stack>
        </Card>
      ) : (
        <EmptyPlaceholder
          title="No Orders Found"
          description="You haven't liked anything yet. Start exploring"
          image={images.myOrdersPlaceholder}
          btn={{
            label: 'Shop Now',
            link: '/products',
          }}
        />
      )}
    </>
  );
};

export default MyOrdersPage;
