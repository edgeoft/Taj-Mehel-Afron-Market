import Tag from '@/components/common/Tag';
import { availableColors, availableSizes } from '@/static/detail';
import { Box, Flex, Text, Title } from '@mantine/core';
import { Phone } from '@phosphor-icons/react/dist/ssr';
import DeliveryShippingInfo from './DeliveryShippingInfo';
import ProductCartButtons from './ProductCartButtons';
import ProductChoose from './ProductChoose';
import ReviewSection from './ReviewSection';

const ProductInfoSection = () => {
  return (
    <Box
      className="productInfo-container"
      maw={{ base: '100%', lg: 385 }}
      miw={{ base: '100%', lg: 314, xl: 385 }}
    >
      <Text className="productInfo-tag" mb={8} c={'secondary.6'}>
        SOFA
      </Text>
      <Title order={2} className="font-normal productInfo-title" mb={12}>
        King Sized Sofa
      </Title>

      <ReviewSection />

      <Flex justify={'space-between'} align={'center'} gap={16} mb={16}>
        <Title order={3} className="productInfo-priceInfo" c={'neutral.10'}>
          Rs.80,000
        </Title>
        <Tag text={`20% off`} />
      </Flex>
      <Text className="body-2" c={'neutral.6'} mb={12}>
        Experience ultimate relaxation with our elegant sofa, designed for both
        style and comfort.
      </Text>
      <ProductChoose title={'Size'} data={availableSizes} />
      <ProductChoose title={'Color'} data={availableColors} />

      <Flex
        justify={{ base: 'flex-start', md: 'space-between' }}
        align={'flex-start'}
        direction={{ base: 'row', md: 'column' }}
        gap={{ base: 12, md: 8 }}
        mb={24}
      >
        <Text c={'neutral.9'} className="productInfo-infoTitle">
          Seller
        </Text>
        <Flex align={'center'} wrap={'wrap'} gap={8}>
          <Flex
            justify={'space-between'}
            align={'center'}
            gap={8}
            className="productInfo-sellerButton"
          >
            <Phone size={20} color={'#454545'} />
            <Text className="body-2" c={'#454545'}>
              Krishna Furniture
            </Text>
          </Flex>
          <Flex
            justify={'space-between'}
            align={'center'}
            gap={8}
            className="productInfo-sellerButton"
          >
            <Phone size={20} color={'#454545'} />
            <Text className="body-2" c={'#454545'}>
              9898989898
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <ProductCartButtons />
      <DeliveryShippingInfo />
    </Box>
  );
};

export default ProductInfoSection;
