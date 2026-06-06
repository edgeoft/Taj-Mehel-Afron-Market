import { images } from '@/assets';
import { Box, Button, Flex, Group, Stack, Text, Title } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';

export default function OrderPlacedContent() {
  return (
    <Stack gap={24} align="center" w={'100%'}>
      <Stack gap={12} align="center" w={'100%'}>
        <Flex justify={'space-between'} align={'center'} w={'100%'}>
          <Box />
          <Title order={3} c={'neutral.10'} className="text-center" p={0}>
            Order Placed Successfully
          </Title>
          <Box />
        </Flex>

        <Text className="body-2 text-center" c={'#595959'}>
          Your order has been placed successfully. Now you can explore other
          items or track your order
        </Text>
      </Stack>

      <Image
        src={images.checkoutModalImg}
        alt={'checkout img'}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full"
      />

      <Group gap={8} wrap="nowrap" w={'100%'}>
        <Link href={'/accounts/my-orders'} passHref className="w-full">
          <Button className="w-full" variant={'outline'} onClick={close}>
            Track My Order
          </Button>
        </Link>
        <Link href={'/products'} passHref className="w-full">
          <Button className="w-full" variant={'filled'}>
            Explore
          </Button>
        </Link>
      </Group>
    </Stack>
  );
}
