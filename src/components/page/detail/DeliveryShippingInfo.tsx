import { Flex, Text } from '@mantine/core';
import { Money, Truck } from '@phosphor-icons/react/dist/ssr';

const DeliveryShippingInfo = () => {
  return (
    <>
      <Flex
        justify={'flex-start'}
        align={'center'}
        gap={8}
        mb={12}
        visibleFrom="md"
      >
        <Truck size={24} color={'#8B8B8B'} />
        <Text className="font-size-16" c={'neutral.6'}>
          Estimation Delivery:
        </Text>
        <Text className="font-size-16 font-bold" c={'neutral.9'}>
          23 - 28 April, 2024
        </Text>
      </Flex>
      <Flex justify={'flex-start'} align={'center'} gap={8} visibleFrom="md">
        <Money size={24} color={'#8B8B8B'} />
        <Text className="font-size-16" c={'neutral.6'}>
          Free Shipping:
        </Text>
        <Text className="font-size-16 font-bold" c={'neutral.9'}>
          Inside Kathmandu
        </Text>
      </Flex>
    </>
  );
};

export default DeliveryShippingInfo;
