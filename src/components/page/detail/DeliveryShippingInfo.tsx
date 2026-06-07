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
        <Truck size={24} color={'#8B8B8B'} aria-hidden />
        <Text className="font-size-16" c={'neutral.6'}>
          Estimated delivery:
        </Text>
        <Text className="font-size-16 font-bold" c={'neutral.9'}>
          1–2 business days
        </Text>
      </Flex>
      <Flex justify={'flex-start'} align={'center'} gap={8} visibleFrom="md">
        <Money size={24} color={'#8B8B8B'} aria-hidden />
        <Text className="font-size-16" c={'neutral.6'}>
          Free delivery:
        </Text>
        <Text className="font-size-16 font-bold" c={'neutral.9'}>
          Orders over €50 in Helsinki metro
        </Text>
      </Flex>
    </>
  );
};

export default DeliveryShippingInfo;
