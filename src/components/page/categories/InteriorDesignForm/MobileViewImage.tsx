import { Box, Flex, Text, Title } from '@mantine/core';
import Image from 'next/image';

import { Category } from '@/types/category';

import '@/styles/page/categories/__mobileViewImage.scss';

type Props = {
  selectedCategory: Category;
};

function MobileViewImage({ selectedCategory }: Props) {
  return (
    <Box
      display={{ base: 'block', md: 'none' }}
      pos={'relative'}
      mb={16}
      className="mobile-view-image-container"
      h={133}
    >
      <Image
        src={selectedCategory?.image}
        alt={selectedCategory?.name}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-133 object-cover"
      />

      <Flex direction={'column'} gap={4} p={16} className="image-overlay">
        <Title order={3} c={'neutral.0'}>
          Living room interior
        </Title>
        <Text className="body-2" mt={2} c={'neutral.0'}>
          Get this interior design for your house
        </Text>
      </Flex>
    </Box>
  );
}

export default MobileViewImage;
