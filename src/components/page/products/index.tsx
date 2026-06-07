import { Flex, SimpleGrid } from '@mantine/core';
import ProductFilter from './ProductFilter';
import ProductHeader from './ProductHeader';
import { products } from '@/static/product';
import ProductCard from '@/components/common/card/ProductCard';
import MobileProductFilter from './MobileProductFilter';

type Props = {};

const ProductListingSection = ({}: Props) => {
  return (
    <>
      <Flex justify={'space-between'} gap={32} w={'100%'}>
        <ProductFilter />

        <Flex direction={'column'} gap={16} w={'100%'}>
          <ProductHeader />

          <SimpleGrid cols={{ base: 2, lg: 3 }}>
            {products?.map((product) => (
              <ProductCard key={product?.id} product={product} />
            ))}
          </SimpleGrid>
        </Flex>
      </Flex>

      <MobileProductFilter />
    </>
  );
};

export default ProductListingSection;
