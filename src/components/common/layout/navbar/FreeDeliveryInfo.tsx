import { Flex, Text } from '@mantine/core';
import { Truck } from '@phosphor-icons/react/dist/ssr';

const FreeDeliveryInfo = () => {
  return (
    <Flex justify={'flex-start'} align={'center'} gap={8} h={'100%'}>
      <Truck size={32} color={'#FF9933'} aria-hidden />
      <Text className="font-size-14 font-bold" c={'orange.6'}>
        Free delivery over €50
      </Text>
    </Flex>
  );
};

export default FreeDeliveryInfo;
