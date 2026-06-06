'use client';
import { useState } from 'react';
import { Box, Button, Container, Flex, Text, Title } from '@mantine/core';
import Image from 'next/image';
import { CaretRight } from '@phosphor-icons/react/dist/ssr';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';

import SectionHeader from '@/components/common/section-header';
import { categories } from '@/static/category';
import ModalDrawerContainer from '@/components/common/modal/ModalDrawerContainer';
import { Category } from '@/types/category';
import InteriorDesignForm from './InteriorDesignForm';
import MobileViewImage from './InteriorDesignForm/MobileViewImage';

import '@/styles/page/categories/__imageGallery.scss';

type Props = {};

const ImageGallery = ({}: Props) => {
  const [selectedOption, setSelectedOption] = useState(`${categories[0]?.id}`);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );

  const [opened, { open, close }] = useDisclosure(false);

  const matches = useMediaQuery('(max-width: 768px)');

  const handleImageClick = (category: Category) => {
    setSelectedCategory(category);
    open();
  };

  return (
    <>
      <Container className="padding-t-72">
        <Flex gap={{ base: 16, md: 24 }} direction={'column'}>
          <SectionHeader
            title={'Get Inspired'}
            type="tab"
            selectedOption={selectedOption}
            handleOptionChange={(value) => setSelectedOption(value)}
            tabs={categories?.map((category) => {
              return {
                label: category?.name,
                value: `${category?.id}`,
              };
            })}
            tabWidth={'100%'}
          />

          <Box className="gallery-container">
            {categories?.map((category, index) => {
              const itemNo = (index + 1) % 8;
              return (
                <Box
                  key={category?.id}
                  className={`gallery-item-${itemNo}`}
                  onClick={
                    matches ? () => handleImageClick(category) : () => {}
                  }
                >
                  <Image
                    src={category?.image}
                    alt={category?.name}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto"
                  />

                  <Flex
                    className="image-overlay"
                    direction={'column'}
                    gap={16}
                    display={{ base: 'none', md: 'flex' }}
                  >
                    <Box>
                      <Title order={3}>Living room interior</Title>
                      <Text className="body-2" mt={2}>
                        Get this interior design for your house
                      </Text>
                    </Box>

                    <Button
                      rightSection={<CaretRight />}
                      w={'fit-content'}
                      className="get-interior-button"
                      onClick={() => handleImageClick(category)}
                    >
                      Contact Us
                    </Button>
                  </Flex>
                </Box>
              );
            })}
          </Box>
        </Flex>
      </Container>

      <ModalDrawerContainer
        title="Get Interior Design"
        close={close}
        opened={opened}
        drawerSize={'98%'}
      >
        <MobileViewImage selectedCategory={selectedCategory!} />
        <InteriorDesignForm close={close} />
      </ModalDrawerContainer>
    </>
  );
};

export default ImageGallery;
