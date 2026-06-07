import OrderDetailCard from '@/components/common/card/OrderDetailCard';
import { ListOption } from '@/types/generic';
import { formatPriceInRs } from '@/utils/price';
import { Divider, Flex, SimpleGrid, Stack, Text, Title } from '@mantine/core';

const LabelWithValue = ({ label, value }: ListOption) => {
  return (
    <Flex justify={'space-between'} align={'center'} gap={8}>
      <Text className="body-2" c={'neutral.7'}>
        {label}
      </Text>
      <Text className="body-2 text-right" c={'neutral.10'}>
        {value}
      </Text>
    </Flex>
  );
};

const OrderFooterGrid = () => {
  const deliveryDetails = [
    { id: 1, label: 'Name', value: 'Priya Sharma' },
    {
      id: 2,
      label: 'Address',
      value: 'Mannerheimintie 12, 00100 Helsinki',
    },
    { id: 3, label: 'Phone', value: '040 815 1341' },
    { id: 4, label: 'Delivery Date', value: 'Thu, 12 Jun 2026' },
  ];

  const orderSummary = [
    { id: 1, label: 'Subtotal', value: '36.99' },
    { id: 2, label: 'Discount', value: '4.00' },
    { id: 3, label: 'Delivery', value: '4.99' },
  ];

  return (
    <SimpleGrid cols={{ base: 1, md: 2 }} spacing={{ base: 16, md: 24 }}>
      <OrderDetailCard title="Delivery Details">
        <Stack gap={16}>
          {deliveryDetails?.map((detail) => (
            <LabelWithValue
              key={detail.id}
              label={detail.label}
              value={detail.value}
            />
          ))}
        </Stack>
      </OrderDetailCard>
      <OrderDetailCard title="Order Summary">
        <Stack gap={12}>
          {orderSummary?.map((summary) => (
            <LabelWithValue
              key={summary.id}
              label={summary.label}
              value={formatPriceInRs(Number(summary.value))}
            />
          ))}

          <Stack gap={8}>
            <Divider />

            <Flex justify={'space-between'} align={'center'} gap={8}>
              <Title order={4} c={'neutral.10'}>
                Total
              </Title>
              <Title order={4} c={'neutral.10'}>
                {formatPriceInRs(37.98)}
              </Title>
            </Flex>

            <Divider />
          </Stack>
        </Stack>
      </OrderDetailCard>
    </SimpleGrid>
  );
};

export default OrderFooterGrid;
