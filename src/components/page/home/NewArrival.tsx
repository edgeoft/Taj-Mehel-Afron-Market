'use client';
import { useState } from 'react';

import { Container, Flex, SimpleGrid } from '@mantine/core';
import SectionHeader from '@/components/common/section-header';
import { products } from '@/static/product';
import ProductCard from '@/components/common/card/ProductCard';
import { newArrivalsTabs } from '@/static/home';

type Props = {};

const NewArrivalsList = ({}: Props) => {
  const [selectedOption, setSelectedOption] = useState('furniture');

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };
  return (
    <Container className="padding-t-72">
      <Flex gap={{ base: 16, md: 24 }} direction={'column'}>
        <SectionHeader
          title={'New Arrivals'}
          type="tab"
          selectedOption={selectedOption}
          handleOptionChange={handleOptionChange}
          tabs={newArrivalsTabs}
          link="/products"
        />

        <SimpleGrid
          cols={{ base: 2, md: 3, lg: 4 }}
          spacing={16}
          verticalSpacing={24}
        >
          {products.map((product) => (
            <ProductCard key={product?.id} product={product} />
          ))}
        </SimpleGrid>
      </Flex>
    </Container>
  );
};

export default NewArrivalsList;
