'use client';

import Image from 'next/image';
import { CarouselSlide } from '@mantine/carousel';
import { Box, Card, Flex } from '@mantine/core';
import { Heart } from '@phosphor-icons/react/dist/ssr';
import { useEffect, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import {
  Fullscreen,
  Thumbnails,
  Zoom,
} from 'yet-another-react-lightbox/plugins';
import { useDisclosure } from '@mantine/hooks';

import CardSlider from '@/components/common/slider/CardSlider';
import { activeProductInfo } from '@/static/detail';
import ProductImageCard from './ProductImageCard';

const ProductImageSection = () => {
  const [activeImageIdx, setActiveImageIdx] = useState<number>(0);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const [opened, { open, close }] = useDisclosure(false);

  const [emblaApi, setEmblaApi] = useState<any>(null);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.scrollTo(activeImageIdx);
    }
  }, [activeImageIdx, emblaApi]);

  const handleSlideChange = (currentSlideIndex: number) => {
    setActiveImageIdx(currentSlideIndex);
  };

  const handlePreview = (index: number) => {
    setSelectedIndex(index);
    open();
  };

  const slides = activeProductInfo.image?.map((image) => image?.src);

  return (
    <>
      <Box className="productImage-container">
        <CardSlider
          slideSize={'100%'}
          withControls={false}
          slideGap={0}
          onSlideChange={handleSlideChange}
          getEmblaApi={setEmblaApi}
          mb={8}
        >
          {activeProductInfo.image.map((prodItem, index) => (
            <CarouselSlide
              key={`${prodItem.name}-${index}`}
              onClick={() => handlePreview(index)}
            >
              <Card
                p={0}
                radius={0}
                className="cursor-pointer w-full h-auto object-cover productImage-image"
              >
                <Box className="image-container" pos={'relative'}>
                  <Image
                    src={prodItem.src}
                    alt={prodItem.name}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto object-cover productImage-image"
                  />

                  <Flex
                    justify={'center'}
                    align={'center'}
                    pos={'absolute'}
                    top={16}
                    right={16}
                    w={40}
                    h={40}
                    className="rounded cursor-pointer"
                    bg={'neutral.0'}
                  >
                    <Heart size={24} color="#454545" />
                  </Flex>
                </Box>
              </Card>
            </CarouselSlide>
          ))}
        </CardSlider>

        <CardSlider
          slideSize={0}
          withControls={false}
          dragFree={true}
          slideGap={8}
        >
          {activeProductInfo.image.map((prodItem, index) => (
            <CarouselSlide key={`${prodItem.name}-${index}`}>
              <ProductImageCard
                index={index}
                title={prodItem.name}
                image={prodItem.src}
                activeImageIdx={activeImageIdx}
                setActiveImageIdx={setActiveImageIdx}
              />
            </CarouselSlide>
          ))}
        </CardSlider>
      </Box>

      <Lightbox
        slides={slides}
        index={selectedIndex}
        open={opened}
        close={close}
        plugins={[Fullscreen, Thumbnails, Zoom]}
      />
    </>
  );
};

export default ProductImageSection;
