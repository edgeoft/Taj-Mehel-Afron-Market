import { convertQueryStringIntoArray } from '@/utils/products';
import { Checkbox, Flex, Title } from '@mantine/core';
import { ChangeEvent, useMemo } from 'react';

type Props = {
  title: string;
  options: {
    id: number;
    label: string;
    value: string;
  }[];
  selectedIds: string;
  type: string;
  direction?: 'column' | 'row';
  handleCheckboxChange: (
    e: ChangeEvent<HTMLInputElement>,
    option: string,
    type: string,
    arrayOfSelectedValues: string[]
  ) => void;
};

function CheckboxWithTitle({
  title,
  options,
  selectedIds,
  type,
  direction = 'column',
  handleCheckboxChange,
}: Props) {
  const arrayOfSelectedValues = useMemo(
    () => convertQueryStringIntoArray(selectedIds),
    [selectedIds]
  );

  return (
    <Flex direction={'column'} gap={12}>
      <Title order={5} c={'neutral.9'}>
        {title}
      </Title>

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
                onChange={(e) =>
                  handleCheckboxChange(
                    e,
                    option?.value,
                    type,
                    arrayOfSelectedValues
                  )
                }
              />
            ))
          : null}
      </Flex>
    </Flex>
  );
}

export default CheckboxWithTitle;
