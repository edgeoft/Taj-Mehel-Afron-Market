'use client';
import { Address } from '@/types/address';
import { useForm } from '@mantine/form';
import { yupResolver } from 'mantine-form-yup-resolver';
import { InferType } from 'yup';

import ModalDrawerContainer from '@/components/common/modal/ModalDrawerContainer';
import { addressFormSchema } from './validationSchema';
import { Button, Group, SimpleGrid, Stack } from '@mantine/core';
import FormSectionHeading from '@/components/common/FormSectionHeading';
import Input from '@/components/common/form/Input';
import MobileInput from '@/components/common/form/MobileInput';
import LabelWithValue from '@/components/common/LabelWithValue';
import SelectInput from '@/components/common/form/SelectInput';
import { categories } from '@/static/product';
import { useEffect } from 'react';

type Props = {
  opened: boolean;
  close: () => void;
  address?: Address;
};

const AddressForm = ({ opened, close, address }: Props) => {
  const form = useForm({
    mode: 'uncontrolled',
    validateInputOnChange: true,
    initialValues: {
      name: '',
      phoneCode: '+977',
      phoneNumber: '',
      streetAddress: '',
      city: '',
      state: '',
      zipCode: '',
    },
    validate: yupResolver(addressFormSchema),
  });

  useEffect(() => {
    if (address?.id) {
      form.setValues({
        name: address?.name || '',
        phoneCode: address?.phoneCode || '+977',
        phoneNumber: address?.phoneNumber || '',
        streetAddress: address?.streetAddress || '',
        city: address?.city || '',
        state: address?.state || '',
        zipCode: address?.zipCode || '',
      });
    }
  }, [address]);

  const handleSubmit = (values: InferType<typeof addressFormSchema>) => {
    console.log(values);
  };

  return (
    <ModalDrawerContainer
      title={address?.id ? 'Update Address' : 'Add New Address'}
      close={close}
      opened={opened}
      drawerSize={'98%'}
    >
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack gap={24}>
          <Stack gap={16}>
            <FormSectionHeading title="Personal Information" order={4} />

            <SimpleGrid spacing={16} verticalSpacing={16} cols={1}>
              <Input
                withAsterisk
                label="Full Name"
                placeholder="Enter your name"
                key={form.key('name')}
                {...form.getInputProps('name')}
              />

              <MobileInput
                required
                label="Mobile Number"
                placeholder="Enter mobile number"
                forms={form}
                error={form.getInputProps('phoneNumber').error}
                phoneCodeName="phoneCode"
                phoneNumberName="phoneNumber"
              />
            </SimpleGrid>
          </Stack>

          <Stack gap={16}>
            <FormSectionHeading title="Address" order={4} />

            <LabelWithValue label="Country / Region :" value="Nepal" />

            <SimpleGrid
              spacing={16}
              verticalSpacing={24}
              cols={{ base: 1, md: 2 }}
            >
              <Input
                withAsterisk
                label="Street Address"
                placeholder="Enter street address"
                key={form.key('streetAddress')}
                {...form.getInputProps('streetAddress')}
              />

              <Input
                withAsterisk
                label="Town/City"
                placeholder="Enter town or city"
                key={form.key('city')}
                {...form.getInputProps('city')}
              />

              <SelectInput
                withAsterisk
                label="State / Zone"
                placeholder="Select state / zone "
                data={categories}
                key={form.key('state')}
                {...form.getInputProps('state')}
              />

              <Input
                label="Postal / ZIP (Optional)"
                placeholder="Enter postal / ZIP code"
                key={form.key('zipCode')}
                {...form.getInputProps('zipCode')}
              />
            </SimpleGrid>
          </Stack>

          <Group
            className="mobile-filter-btn-container"
            gap={16}
            pos={{ base: 'sticky', md: 'static' }}
            bottom={'-24px'}
            left={0}
            right={0}
            w={'100%'}
            bg={{ base: 'neutral.0', md: 'transparent' }}
            py={{ base: 16, md: 0 }}
            wrap="nowrap"
          >
            <Button
              type="button"
              className="filter-button"
              w={'100%'}
              variant="outline"
            >
              Cancel
            </Button>

            <Button type="submit" className="filter-button" w={'100%'}>
              {address?.id ? 'Update Address' : 'Add Address'}
            </Button>
          </Group>
        </Stack>
      </form>
    </ModalDrawerContainer>
  );
};

export default AddressForm;
