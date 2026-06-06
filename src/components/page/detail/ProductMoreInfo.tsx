'use client';
import { useState } from 'react';

import { productInfoTabs } from '@/static/detail';
import { Box, Flex, Tabs, TabsList, TabsTab } from '@mantine/core';
import ProductDesc from './ProductDesc';
import ProductReview from './ProductReview';
import ProductSpecs from './ProductSpecs';

type Props = {};

const ProductMoreInfo = ({}: Props) => {
  const [selectedOption, setSelectedOption] = useState('productDesc');

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  const renderSelectedTab = () => {
    switch (selectedOption) {
      case 'productDesc':
        return <ProductDesc />;
      case 'productSpecs':
        return <ProductSpecs />;
      case 'review':
        return <ProductReview />;
      default:
        return <></>;
    }
  };

  return (
    <Flex
      gap={{ base: 16, md: 24 }}
      direction={'column'}
      mt={{ base: 2, md: 32 }}
      mb={{ base: 32, md: 48 }}
    >
      <Box className="productInfo-tabs">
        <Tabs defaultValue={selectedOption}>
          <TabsList>
            {productInfoTabs?.length
              ? productInfoTabs?.map((tab) => (
                  <TabsTab
                    key={tab?.value}
                    value={tab?.value}
                    onClick={() => handleOptionChange(tab?.value)}
                  >
                    {tab?.label}
                  </TabsTab>
                ))
              : null}
          </TabsList>
        </Tabs>
      </Box>
      {renderSelectedTab()}
    </Flex>
  );
};

export default ProductMoreInfo;
