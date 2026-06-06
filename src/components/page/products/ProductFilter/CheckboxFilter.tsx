'use client';
import { Checkbox, Flex } from '@mantine/core';
import { useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, useMemo } from 'react';

import { convertQueryStringIntoArray } from '@/utils/products';

type Props = {
  options: {
    id: number;
    label: string;
    value: string;
  }[];
  selectedValues: string;
  type: string;
  direction?: 'column' | 'row';
};

const CheckboxFilter = ({
  options,
  selectedValues,
  type,
  direction = 'column',
}: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const arrayOfSelectedValues = useMemo(
    () => convertQueryStringIntoArray(selectedValues),
    [selectedValues]
  );

  const handleCheckboxChange = (
    e: ChangeEvent<HTMLInputElement>,
    option: string
  ) => {
    const { checked } = e.target;

    let tempArray = [...arrayOfSelectedValues];

    if (checked) {
      tempArray.push(option);
    } else {
      tempArray = tempArray.filter((value) => value !== option);
    }

    const params = new URLSearchParams(searchParams.toString());
    if (tempArray?.length) {
      const encodedValues = tempArray.join(',');
      params.set(`${type}`, encodedValues);
    } else {
      params.delete(`${type}`);
    }
    const decodedParams = decodeURIComponent(params.toString());
    router.push(`?${decodedParams}`);
  };

  return (
    <Flex direction={direction} justify={'space-between'} gap={12}>
      {options?.length
        ? options.map((option) => (
            <Checkbox
              className="filter-checkbox"
              key={option?.id}
              label={option?.label}
              checked={
                arrayOfSelectedValues?.length
                  ? arrayOfSelectedValues?.includes(option?.value)
                  : false
              }
              onChange={(e) => handleCheckboxChange(e, option?.value)}
            />
          ))
        : null}
    </Flex>
  );
};

export default CheckboxFilter;
