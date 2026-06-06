'use client';

import StarRating from '@/components/common/form/StarRating';
import TextArea from '@/components/common/form/TextArea';
import ModalDrawerContainer from '@/components/common/modal/ModalDrawerContainer';
import { Button, Divider, Flex, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Plus } from '@phosphor-icons/react/dist/ssr';
import { useState } from 'react';

const ReviewSection = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [rating, setRating] = useState(0);
  const handleAddReview = () => {
    open();
  };
  const handleRatingChange = (data: any) => {
    setRating(() => data);
  };

  return (
    <>
      <Flex gap={16} w={'max-content'} align={'center'} mb={16}>
        <Flex gap={8} align={'center'}>
          <StarRating
            value={2.5}
            h={{ base: 20, md: 24 }}
            iconHeight={20}
            iconWidth={20}
            className="productInfo-rating"
            readOnly
          />
          <Text className="productInfo-reviewInfo" c={'neutral.6'}>
            3 Reviews
          </Text>
        </Flex>
        <Divider
          orientation="vertical"
          className="productInfo-divider"
          visibleFrom="md"
        />
        <Button
          rightSection={<Plus />}
          variant="transparent"
          onClick={handleAddReview}
          className="navbar-bottom-buttons"
        >
          Add Review
        </Button>
      </Flex>
      <ModalDrawerContainer
        title="Add Review"
        close={close}
        opened={opened}
        drawerSize={'47%'}
      >
        <StarRating
          value={rating}
          onChange={handleRatingChange}
          h={{ base: 40, md: 40 }}
          iconHeight={40}
          iconWidth={40}
          mb={24}
          className="productInfo-ratingInput"
        />
        <TextArea
          label="Write a review"
          placeholder="Choose a rating first, and then add a review"
          rows={4}
          required
          disabled={rating === 0}
          mb={24}
        />
        <Flex justify={'space-between'} align={'center'} gap={8}>
          <Button
            variant="outline"
            className="w-full"
            style={{ height: '40px !important' }}
          >
            Cancel
          </Button>
          <Button className="w-full" style={{ height: '40px !important' }}>
            Add Review
          </Button>
        </Flex>
      </ModalDrawerContainer>
    </>
  );
};

export default ReviewSection;
