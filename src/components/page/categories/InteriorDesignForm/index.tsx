'use client';

import Input from '@/components/common/form/Input';
import MobileInput from '@/components/common/form/MobileInput';
import SelectInput from '@/components/common/form/SelectInput';
import TextArea from '@/components/common/form/TextArea';
import { Button, Group, Stack } from '@mantine/core';
import { useForm } from '@mantine/form';
import { interiorDesignFormSchema } from './validationSchema';
import { yupResolver } from 'mantine-form-yup-resolver';
import { categories } from '@/static/product';
import FormSectionHeading from '@/components/common/FormSectionHeading';
import { InferType } from 'yup';

type Props = {
  close: () => void;
};

const InteriorDesignForm = ({ close }: Props) => {
  const form = useForm({
    mode: 'uncontrolled',
    validateInputOnChange: true,
    initialValues: {
      name: '',
      phoneCode: '+977',
      phoneNumber: '',
      category: '',
      description: '',
    },
    validate: yupResolver(interiorDesignFormSchema),
  });

  const handleSubmit = (values: InferType<typeof interiorDesignFormSchema>) => {
    console.log(values);
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack gap={24}>
        <Stack gap={16}>
          <FormSectionHeading title="Personal Information" />

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
        </Stack>

        <Stack gap={16}>
          <FormSectionHeading title="About Interior" />

          <SelectInput
            withAsterisk
            label="Select Category"
            placeholder="Please select category "
            data={categories}
            key={form.key('category')}
            {...form.getInputProps('category')}
          />

          <TextArea
            withAsterisk
            label="Describe what you want?"
            placeholder="Enter your message here"
            key={form.key('description')}
            {...form.getInputProps('description')}
          />
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
          <Button onClick={close} type="button" variant="outline" w={'100%'}>
            Cancel
          </Button>

          <Button type="submit" w={'100%'}>
            Send Details
          </Button>
        </Group>
      </Stack>
    </form>
  );
};

export default InteriorDesignForm;
