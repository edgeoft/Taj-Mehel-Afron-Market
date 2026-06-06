'use client';
import {
  Accordion,
  AccordionControl,
  AccordionItem,
  AccordionPanel,
  Divider,
  Flex,
  Title,
} from '@mantine/core';
import { useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent } from 'react';

import CheckboxFilter from './CheckboxFilter';
import { availabilty, categories } from '@/static/product';
import PriceInputs from './PriceInputs';

import '@/styles/page/products/__productFilter.scss';

type Props = {};

const ProductFilter = ({}: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const availability = searchParams.get('availability') || '';
  const categoryIds = searchParams.get('categoryIds') || '';
  const minPrice = searchParams.get('minPrice') || '';
  const maxPrice = searchParams.get('maxPrice') || '';

  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set(`${name}`, value);
    } else {
      params.delete(name);
    }

    const decodedParams = decodeURIComponent(params.toString());
    router.push(`?${decodedParams}`);
  };

  return (
    <Flex
      p={24}
      direction={'column'}
      gap={14}
      bg={'neutral.2'}
      h={'fit-content'}
      w={{ base: 385, lg: 413 }}
      miw={{ base: 195, lg: 292 }}
      display={{ base: 'none', md: 'flex' }}
      className="product-filter-container"
    >
      <Title c={'neutral.10'} order={3}>
        Filter
      </Title>

      <Divider />
      <Flex gap={16} direction={'column'}>
        <Accordion
          multiple
          defaultValue={['availability', 'categories', 'price']}
        >
          <AccordionItem value="availability">
            <AccordionControl p={0}>
              <Title order={4} c={'neutral.9'}>
                Availability
              </Title>
            </AccordionControl>

            <AccordionPanel p={0}>
              <CheckboxFilter
                options={availabilty}
                selectedValues={availability}
                type="availability"
              />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value="categories">
            <AccordionControl p={0}>
              <Title order={4} c={'neutral.9'}>
                Categories
              </Title>
            </AccordionControl>

            <AccordionPanel p={0}>
              <CheckboxFilter
                options={categories}
                selectedValues={categoryIds}
                type="categoryIds"
              />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value="price">
            <AccordionControl p={0}>
              <Title order={4} c={'neutral.9'}>
                Price
              </Title>
            </AccordionControl>

            <AccordionPanel p={0}>
              <PriceInputs
                minPrice={minPrice}
                maxPrice={maxPrice}
                handlePriceChange={handlePriceChange}
              />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
    </Flex>
  );
};

export default ProductFilter;
