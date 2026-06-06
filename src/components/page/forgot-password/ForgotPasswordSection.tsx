'use client';

import Input from '@/components/common/form/Input';
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Text,
  Title,
} from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import { forgotPasswordSchema } from './forgotPasswordSchema';
import Link from 'next/link';

type Props = {};

const ForgotPasswordSection = (props: Props) => {
  const form = useForm({
    mode: 'uncontrolled',
    validateInputOnChange: true,
    initialValues: {
      email: '',
    },
    validate: yupResolver(forgotPasswordSchema),
  });

  const handleSubmit = (values: any) => {
    console.log('SubmittedValues:', values);
  };

  return (
    <Container>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Flex
          direction={'column'}
          justify={'center'}
          align={'flex-start'}
          gap={{ base: 18, md: 24 }}
          className="loginsignup-container"
        >
          <Box className="w-full">
            <Title order={2} c={'neutral.9'}>
              Reset Password
            </Title>
            <Divider my="xs" color={'neutral.3'} />
          </Box>
          <Text className="body-2" c={'neutral.9'}>
            We’ll send you a link to your email to reset your password.
          </Text>
          <Input
            label="Email"
            placeholder="Enter email"
            className="w-full"
            withAsterisk
            key={form.key('email')}
            {...form.getInputProps('email')}
          />
          <Box w={'100%'}>
            <Button type="submit" w={'100%'}>
              Continue
            </Button>
          </Box>

          <Flex justify={'flex-start'} align={'center'} gap={8}>
            <Text className="body-2" c={'neutral.9'}>
              Remember password?
            </Text>
            <Link href={'/login'} passHref>
              <Title order={6} c={'primary.6'} className="cursor-pointer">
                LOGIN
              </Title>
            </Link>
          </Flex>
        </Flex>
      </form>
    </Container>
  );
};

export default ForgotPasswordSection;
