import { Card, Stack } from '@mantine/core';

import FormSectionHeading from '@/components/common/FormSectionHeading';
import OrderProductListing from '@/components/page/accounts/my-order-detail/OrderProductListing';
import OrderFooterGrid from '@/components/page/accounts/my-order-detail/OrderFooterGrid';
import { Params } from '@/types/generic';

type Props = {
  params: Params;
};

const MyOrderDetail = ({ params }: Props) => {
  const { slug } = params;

  return (
    <Card withBorder w="100%" p={{ base: 16, md: 32 }}>
      <Stack gap={24}>
        <FormSectionHeading title={`Orders #${slug}`} order={3} />

        <OrderProductListing />

        <OrderFooterGrid />
      </Stack>
    </Card>
  );
};

export default MyOrderDetail;
