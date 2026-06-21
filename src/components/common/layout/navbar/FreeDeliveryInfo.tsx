import { Flex, Text } from '@mantine/core';
import { Truck } from '@phosphor-icons/react/dist/ssr';

const FreeDeliveryInfo = () => {
  return (
    <Flex justify={'flex-start'} align={'center'} gap={8} h={'100%'}>
      <Truck size={32} color={'#0D1F3D'} aria-hidden />
      <Text className="font-size-14 font-bold" c="#0D1F3D">
        Free delivery over €50 · Vantaa & Uusimaa
      </Text>
    </Flex>
  );
};

export default FreeDeliveryInfo;
