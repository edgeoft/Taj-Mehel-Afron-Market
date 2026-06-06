'use client';

import Counter from '@/components/common/form/Counter';
import { Box, Button, Flex } from '@mantine/core';
import { useState } from 'react';

const ProductCartButtons = () => {
  const [countData, setCountData] = useState(5);

  return (
    <Box
      bg={'neutral.0'}
      pt={{ base: 16, md: 0 }}
      pb={16}
      px={{ base: 16, md: 0 }}
      w={'100%'}
      left={0}
      pos={{ base: 'fixed', md: 'static' }}
      className="productCart-container"
    >
      <Flex justify={'center'} align={'center'} gap={16} mb={16}>
        <Counter value={countData} handleChange={setCountData} />
        <Button className="w-full flex-1" style={{ height: '40px !important' }}>
          Add To cart
        </Button>
      </Flex>
      <Button
        variant="secondary"
        className="w-full"
        style={{ height: '40px !important' }}
      >
        Buy Now
      </Button>
    </Box>
  );
};

export default ProductCartButtons;
