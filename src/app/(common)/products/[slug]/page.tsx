import Newsletter from '@/components/common/Newsletter';
import MightAlsoLike from '@/components/page/detail/MightAlsoLike';
import ProductView from '@/components/page/detail/ProductView';
import SimilarCategories from '@/components/page/detail/SimilarCategories';

export default async function DetailPage({ params }: TDetailPage) {
  const { slug } = params;

  return (
    <>
      <ProductView />
      <SimilarCategories />
      <MightAlsoLike />
      <Newsletter />
    </>
  );
}
