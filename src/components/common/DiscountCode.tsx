'use client';

import { discountCodeOpt } from '@/static/checkout';
import { Button, Flex, Group, SelectProps, Text } from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import * as yup from 'yup';
import MultiSelectInput from './form/MultiSelectInput';

interface TDiscountCodeProps {}

const orderSummarySchema = yup.object().shape({
  discountCode: yup.array(),
});

export default function DiscountCode(props: TDiscountCodeProps) {
  const form = useForm({
    mode: 'uncontrolled',
    validateInputOnChange: true,
    initialValues: {
      discountCode: [],
    },
    validate: yupResolver(orderSummarySchema),
  });

  const renderSelectOption: SelectProps['renderOption'] = ({ option }: any) => (
    <Group
      flex="1"
      justify="space-between"
      gap="sm"
      className="orderSummary-select"
    >
      <Text className="orderSummary-select-label">{option.label}</Text>
      <Text className="orderSummary-select-desc">{option.desc}</Text>
    </Group>
  );

  const handleSubmit = (values: yup.InferType<typeof orderSummarySchema>) => {
    console.log(values, 'SubmittedValues');
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Flex justify={'space-between'} align={'center'} mb={12} gap={0}>
        <MultiSelectInput
          placeholder={'Discount Code'}
          data={discountCodeOpt}
          renderOption={renderSelectOption}
          searchable
          nothingFoundMessage="No options"
          mah={40}
          className="flex-1 orderSummary-input"
          required
          rightSectionPointerEvents="none"
          rightSection={<></>}
          maxValues={1}
          styles={{
            dropdown: {
              zIndex: 302,
            },
          }}
          key={form.key('discountCode')}
          {...form.getInputProps('discountCode')}
        />
        <Button type="submit" variant="secondary" miw={71}>
          Send
        </Button>
      </Flex>
    </form>
  );
}
