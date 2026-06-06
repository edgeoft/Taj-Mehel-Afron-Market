import { productSpecData } from '@/static/detail';
import { Box, Divider, Flex, Text } from '@mantine/core';

const ProductSpecs = () => {
  return (
    <Box>
      {productSpecData.map(({ label, value }, index) => (
        <Flex
          key={index}
          justify={'flex-start'}
          align={'center'}
          gap={12}
          h={54}
          bg={(index + 1) % 2 === 0 ? 'neutral.2' : 'neutral.3'}
        >
          <Text className="productSpec-key">{label}</Text>
          <Divider orientation="vertical" className="productSpec-divider" />
          <Text className="productSpec-value">{value}</Text>
        </Flex>
      ))}
    </Box>
  );
};

export default ProductSpecs;
