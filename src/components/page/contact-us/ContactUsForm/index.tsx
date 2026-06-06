'use client';

import { Button, Card, Checkbox, Flex, Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import { yupResolver } from 'mantine-form-yup-resolver';
import Link from 'next/link';
import { InferType } from 'yup';

import FormSectionHeading from '@/components/common/FormSectionHeading';
import Input from '@/components/common/form/Input';
import { contactUsValidation } from './validationSchema';
import MobileInput from '@/components/common/form/MobileInput';
import TextArea from '@/components/common/form/TextArea';

type Props = {};

const ContactUsForm = ({}: Props) => {
  const form = useForm({
    mode: 'uncontrolled',
    validateInputOnChange: true,
    initialValues: {
      name: '',
      phoneCode: '+977',
      phoneNumber: '',
      email: '',
      description: '',
    },
    validate: yupResolver(contactUsValidation),
  });

  const handleSubmit = (values: InferType<typeof contactUsValidation>) => {
    console.log(values);
  };

  return (
    <Card
      withBorder
      p={{ base: 24, md: 32 }}
      className="rounded-none border"
      flex={{ base: 1, xl: 1.5 }}
    >
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Flex direction={'column'} gap={24}>
          <FormSectionHeading title="Contact Us" order={2} />

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

          <TextArea
            withAsterisk
            label="Describe what you want?"
            placeholder="Enter your message here"
            key={form.key('description')}
            {...form.getInputProps('description')}
          />

          <Checkbox
            size="xs"
            label={
              <Text className="body-2" c={'neutral.7'}>
                I agree to{' '}
                <Link className="font-bold" href={`/terms-of-use`}>
                  Terms of Use
                </Link>{' '}
                and{' '}
                <Link className="font-bold" href={'/privacy-policy'}>
                  Privacy Policy
                </Link>
              </Text>
            }
            className="myCart-checkbox"
          />

          <Button w={'fit-content'} type="submit">
            Submit
          </Button>
        </Flex>
      </form>
    </Card>
  );
};

export default ContactUsForm;
