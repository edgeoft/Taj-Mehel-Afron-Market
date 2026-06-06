import RequirementBanner from '@/components/common/requirement-banner';
import CategoryList from '@/components/page/categories/CategoryList';
import CategoryProductList from '@/components/page/categories/CategoryProductList';
import ImageGallery from '@/components/page/categories/ImageGallery';
import { categoryProductsSection } from '@/static/category';
import React from 'react';

type Props = {};

const CategoriesPage = ({}: Props) => {
  return (
    <>
      <CategoryList />

      {categoryProductsSection?.map((section, index) => {
        return (
          <React.Fragment key={section?.id}>
            {index === 2 ? <RequirementBanner /> : null}

            {index + 1 === categoryProductsSection?.length ? (
              <ImageGallery />
            ) : null}

            <CategoryProductList
              key={section?.id}
              title={section?.title}
              description={section?.description}
              link={section?.link}
              products={section?.products}
              padding={
                index + 1 === categoryProductsSection?.length
                  ? `padding-y-72`
                  : 'padding-t-72'
              }
            />
          </React.Fragment>
        );
      })}
    </>
  );
};

export default CategoriesPage;
