import { Container } from '@mantine/core';
import { Suspense } from 'react';

import ProductListingSection from '@/components/page/products';
import BreadCrumb from '@/components/common/Breadcrumb';
import { breadCrumb } from '@/static/product';

type Props = {};

const ProductsPage = ({}: Props) => {
  return (
    <Container className="padding-b-72">
      <BreadCrumb data={[...breadCrumb]} />

      <Suspense>
        <ProductListingSection />
      </Suspense>
    </Container>
  );
};

export default ProductsPage;
