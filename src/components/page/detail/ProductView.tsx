import BreadCrumb from '@/components/common/Breadcrumb';
import { breadCrumb } from '@/static/detail';
import { Box, Container, Flex } from '@mantine/core';
import ProductImageSection from './ProductImageSection';
import ProductInfoSection from './ProductInfoSection';
import ProductMoreInfo from './ProductMoreInfo';

const ProductView = () => {
  return (
    <Container>
      <Box className="productView-container">
        <BreadCrumb data={[...breadCrumb]} />
        <Flex
          justify={{ base: 'flex-start' }}
          align={'flex-start'}
          direction={{ base: 'column', lg: 'row' }}
          gap={{ base: 16, md: 48 }}
          maw={'100%'}
        >
          <ProductImageSection />
          <ProductInfoSection />
        </Flex>
        <ProductMoreInfo />
      </Box>
    </Container>
  );
};

export default ProductView;
