'use client';

import { icons } from '@/assets';
import Input from '@/components/common/form/Input';
import InputPassword from '@/components/common/form/InputPassword';
import MobileInput from '@/components/common/form/MobileInput';
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  Flex,
  Text,
  Title,
} from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import { Envelope } from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { signUpSchema } from './signUpSchema';

type Props = {};

const SignUpSection = (props: Props) => {
  const [loginByEmail, setLoginByEmail] = useState(false);

  const toggleLoginByEmail = () => {
    setLoginByEmail((prevData) => !prevData);
  };

  const form = useForm({
    mode: 'uncontrolled',
    validateInputOnChange: true,
    initialValues: {
      name: '',
      phoneCode: '+977',
      phoneNumber: '',
      email: '',
      password: '',
    },
    validate: yupResolver(signUpSchema(loginByEmail)),
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
              {'Sign Up'}
            </Title>
            <Divider my="xs" color={'neutral.3'} />
          </Box>
          <Input
            label="Name"
            placeholder="Enter Name"
            className="w-full"
            withAsterisk
            key={form.key('name')}
            {...form.getInputProps('name')}
          />
          {loginByEmail ? (
            <Input
              label="Email"
              placeholder="Enter email"
              className="w-full"
              withAsterisk
              key={form.key('email')}
              {...form.getInputProps('email')}
            />
          ) : (
            <Box className="w-full">
              <MobileInput
                required
                label="Mobile"
                placeholder="Enter mobile number"
                forms={form}
                error={form.getInputProps('phoneNumber').error}
                phoneCodeName="phoneCode"
                phoneNumberName="phoneNumber"
                className="w-full"
              />
            </Box>
          )}
          <InputPassword
            label="Password"
            placeholder="Enter Password"
            withAsterisk
            autoComplete="new-password"
            className="w-full"
            key={form.key('password')}
            {...form.getInputProps('password')}
          />
          <Box w={'100%'}>
            <Button type="submit" w={'100%'}>
              Continue
            </Button>
            <Divider
              my="sm"
              label="or"
              labelPosition="center"
              className="loginsignup-divider"
            />
            <Button
              variant="outline"
              leftSection={<Envelope />}
              w={'100%'}
              mb={10}
              className="loginsignup-continueButtons"
              onClick={toggleLoginByEmail}
            >
              {loginByEmail ? 'Continue with phone' : 'Continue with email'}
            </Button>
            <Button
              variant="outline"
              leftSection={
                <Image
                  src={icons.FBIcon}
                  alt={'fb-icon'}
                  width={24}
                  height={24}
                  sizes="100vw"
                />
              }
              w={'100%'}
              mb={10}
              className="loginsignup-continueButtons"
            >
              Continue with facebook
            </Button>
            <Button
              variant="outline"
              leftSection={
                <Image
                  src={icons.GoogleIcon}
                  alt={'google-icon'}
                  width={24}
                  height={24}
                  sizes="100vw"
                />
              }
              w={'100%'}
              className="loginsignup-continueButtons"
            >
              Continue with google
            </Button>
          </Box>
          <Flex justify={'flex-start'} align={'center'} gap={8}>
            <Text className="body-2" c={'neutral.9'}>
              Already have an account?
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

export default SignUpSection;
