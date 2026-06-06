import { images } from '@/assets';
import EmptyPlaceholder from '@/components/common/EmptyPlaceholder';
import MyCartSection from '@/components/page/my-cart/MyCartSection';

const MyCart = () => {
  return (
    <>
      {[1]?.length ? (
        <MyCartSection />
      ) : (
        <EmptyPlaceholder
          title="Your cart is empty"
          description="Seems like you haven’t added anything. Start adding items and order to get them as quickly as possible."
          image={images.myOrdersPlaceholder}
          btn={{
            label: 'Shop Now',
            link: '/products',
          }}
        />
      )}
    </>
  );
};

export default MyCart;
