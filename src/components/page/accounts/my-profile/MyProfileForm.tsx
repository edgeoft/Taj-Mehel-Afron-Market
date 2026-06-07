'use client';
import { useRef } from 'react';
import { Button, Card, Group, SimpleGrid, Stack } from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import { InferType } from 'yup';

import { myProfileSchema } from './validationSchema';
import FormSectionHeading from '@/components/common/FormSectionHeading';
import Input from '@/components/common/form/Input';
import MobileInput from '@/components/common/form/MobileInput';
import SelectInput from '@/components/common/form/SelectInput';
import { categories } from '@/static/product';
import LabelWithValue from '@/components/common/LabelWithValue';
import AvatarInput from '@/components/common/form/AvatarInput';

type Props = {};

const MyProfileForm = ({}: Props) => {
  const fileRef = useRef<HTMLInputElement>(null);

  const form = useForm({
    mode: 'uncontrolled',
    validateInputOnChange: true,
    initialValues: {
      name: '',
      phoneCode: '+977',
      phoneNumber: '',
      email: '',
      companyName: '',
      streetAddress: '',
      city: '',
      state: '',
      zipCode: '',
      profileImg: null as File | null,
    },
    validate: yupResolver(myProfileSchema),
  });

  const handleImageChange = (file: File | null) => {
    form.setValues({
      profileImg: file ?? null,
    });
  };

  const handleSubmit = (values: InferType<typeof myProfileSchema>) => {
    console.log(values);
  };
  return (
    <Card withBorder w="100%" p={{ base: 16, md: 32 }}>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack gap={24}>
          <FormSectionHeading title="My Profile" order={3} />

          <AvatarInput
            fileRef={fileRef}
            name="profileImg"
            handleChange={handleImageChange}
            image={form.getValues().profileImg}
          />

          <Stack gap={16}>
            <FormSectionHeading title="Personal Information" order={4} />

            <SimpleGrid
              spacing={16}
              verticalSpacing={24}
              cols={{ base: 1, md: 2 }}
            >
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

              <Input
                withAsterisk
                label="Email Address"
                placeholder="Enter email address"
                key={form.key('email')}
                {...form.getInputProps('email')}
              />

              <Input
                label="Company Name (Optional)"
                placeholder="Enter company name"
                key={form.key('companyName')}
                {...form.getInputProps('companyName')}
              />
            </SimpleGrid>
          </Stack>

          <Stack gap={16}>
            <FormSectionHeading title="Address" order={4} />

            <LabelWithValue label="Country / Region :" value="Finland" />

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
            pos={{ base: 'fixed', md: 'static' }}
            bottom={0}
            left={0}
            right={0}
            w={'100%'}
            bg={{ base: 'neutral.0', md: 'transparent' }}
            p={{ base: 16, md: 0 }}
          >
            <Button
              type="submit"
              w={{ base: '100%', md: 'fit-content' }}
              className="filter-button"
            >
              Save Changes
            </Button>
          </Group>
        </Stack>
      </form>
    </Card>
  );
};

export default MyProfileForm;
