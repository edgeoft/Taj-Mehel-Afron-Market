import { Container, Flex, SimpleGrid } from '@mantine/core';
import SectionHeader from '@/components/common/section-header';
import { popularElectronics } from '@/static/product';
import ProductCard from '@/components/common/card/ProductCard';

type Props = {};

const PopularElectronicsItems = ({}: Props) => {
  return (
    <Container className="padding-y-72">
      <Flex gap={{ base: 16, md: 24 }} direction={'column'}>
        <SectionHeader
          title={'Popular Electronics Items'}
          type="description"
          description={'Best electronics for your home'}
          link="/products"
        />

        <SimpleGrid
          cols={{ base: 2, md: 3, lg: 4 }}
          spacing={16}
          verticalSpacing={24}
        >
          {popularElectronics.map((product) => (
            <ProductCard key={product?.id} product={product} />
          ))}
        </SimpleGrid>
      </Flex>
    </Container>
  );
};

export default PopularElectronicsItems;
