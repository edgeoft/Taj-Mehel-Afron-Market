'use client';
import { Box, Button, Divider, Drawer, Flex, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, useEffect, useState } from 'react';
import { Faders, X } from '@phosphor-icons/react/dist/ssr';

import CheckboxWithTitle from './CheckboxWithTitle';
import { availabilty, categories } from '@/static/product';
import PriceInputs from '../ProductFilter/PriceInputs';

type Props = {};

const MobileProductFilter = ({}: Props) => {
  const [opened, { open, close }] = useDisclosure(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  const queryAvailability = searchParams.get('availability') || '';
  const queryCategoryIds = searchParams.get('categoryIds') || '';
  const queryMinPrice = searchParams.get('minPrice') || '';
  const queryMaxPrice = searchParams.get('maxPrice') || '';

  const [availability, setAvailabilty] = useState('');
  const [categoryIds, setCategoryIds] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    setAvailabilty(queryAvailability);
    setCategoryIds(queryCategoryIds);
    setMinPrice(queryMinPrice);
    setMaxPrice(queryMaxPrice);
  }, [queryAvailability, queryCategoryIds, queryMaxPrice, queryMinPrice]);

  const handleCheckboxChange = (
    e: ChangeEvent<HTMLInputElement>,
    option: string,
    type: string,
    arrayOfSelectedValues: string[]
  ) => {
    const { checked } = e.target;

    let tempArray = [...arrayOfSelectedValues];

    if (checked) {
      tempArray.push(option);
    } else {
      tempArray = tempArray.filter((value) => value !== option);
    }

    const queryString = tempArray?.length ? tempArray?.join(',') : '';

    switch (type) {
      case 'availability':
        setAvailabilty(queryString);
        break;
      case 'categoryIds':
        setCategoryIds(queryString);
        break;
    }
  };

  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'minPrice') {
      setMinPrice(value);
      return;
    }
    setMaxPrice(value);
  };

  const handleClear = () => {
    router.push('/products');
    close();
  };

  const handleApply = () => {
    const params = new URLSearchParams(searchParams.toString());

    availability
      ? params.set('availability', availability)
      : params.delete('availability');
    categoryIds
      ? params.set('categoryIds', categoryIds)
      : params.delete('categoryIds');
    minPrice ? params.set('minPrice', minPrice) : params.delete('minPrice');
    maxPrice ? params.set('maxPrice', maxPrice) : params.delete('maxPrice');

    const decodedParams = decodeURIComponent(params.toString());
    router.push(`?${decodedParams}`);

    close();
  };

  return (
    <>
      <Box
        bottom={0}
        pos={'fixed'}
        bg={'neutral.0'}
        left={0}
        right={0}
        p={16}
        display={{ base: opened ? 'none' : 'block', md: 'none' }}
        className="box-shadow-bottom-nav mobile-filter-btn-container"
      >
        <Button
          onClick={open}
          leftSection={<Faders />}
          variant="secondary"
          w={'100%'}
          className="filter-button"
        >
          Filter
        </Button>
      </Box>

      <Drawer
        position="bottom"
        opened={opened}
        onClose={close}
        title="Filter"
        className="mobile-bottom-drawer"
        size={'74%'}
        closeButtonProps={{
          icon: <X size={20} color="#212121" />,
        }}
        display={{ base: 'block', md: 'none' }}
      >
        <Flex direction={'column'} gap={16}>
          <CheckboxWithTitle
            title={'Availabilty'}
            selectedIds={availability}
            options={availabilty}
            type="availability"
            direction="row"
            handleCheckboxChange={handleCheckboxChange}
          />

          <Divider />

          <CheckboxWithTitle
            title={'Categories'}
            selectedIds={categoryIds}
            options={categories}
            type="categoryIds"
            handleCheckboxChange={handleCheckboxChange}
          />

          <Divider />

          <Flex direction={'column'} gap={12}>
            <Title order={5} c={'neutral.9'}>
              Price
            </Title>

            <PriceInputs
              minPrice={minPrice}
              maxPrice={maxPrice}
              handlePriceChange={handlePriceChange}
            />
          </Flex>

          <Divider />

          <Flex gap={8} className="mobile-bottom-drawer-btn-container">
            <Button
              variant="outline"
              w={'100%'}
              className="mobile-bottom-drawer-btn"
              onClick={handleClear}
            >
              Clear
            </Button>

            <Button
              w={'100%'}
              className="mobile-bottom-drawer-btn"
              onClick={handleApply}
            >
              Apply Filter
            </Button>
          </Flex>
        </Flex>
      </Drawer>
    </>
  );
};

export default MobileProductFilter;
