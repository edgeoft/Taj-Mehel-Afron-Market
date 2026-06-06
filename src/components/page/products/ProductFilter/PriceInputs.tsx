'use client';
import { ChangeEvent } from 'react';
import { Flex, Text } from '@mantine/core';

import Input from '@/components/common/form/Input';

type Props = {
  minPrice: string;
  maxPrice: string;
  handlePriceChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const PriceInputs = ({ minPrice, maxPrice, handlePriceChange }: Props) => {
  return (
    <Flex gap={8} align={'center'}>
      <Input
        placeholder="Min Price"
        name="minPrice"
        type="number"
        value={minPrice}
        onChange={handlePriceChange}
        w={'100%'}
      />

      <Text>-</Text>

      <Input
        placeholder="Max Price"
        name="maxPrice"
        type="number"
        value={maxPrice}
        onChange={handlePriceChange}
        w={'100%'}
      />
    </Flex>
  );
};

export default PriceInputs;
