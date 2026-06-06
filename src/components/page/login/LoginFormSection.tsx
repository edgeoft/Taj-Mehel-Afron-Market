'use client';

import { icons } from '@/assets';
import Input from '@/components/common/form/Input';
import InputPassword from '@/components/common/form/InputPassword';
import MobileInput from '@/components/common/form/MobileInput';
import {
  Box,
  Button,
  Checkbox,
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
import { loginSchema } from './loginSchema';

type TLoginForm = {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

export const LoginFormSection = ({ setCurrentStep }: TLoginForm) => {
  const [loginByEmail, setLoginByEmail] = useState(false);

  const form = useForm({
    mode: 'uncontrolled',
    validateInputOnChange: true,
    initialValues: {
      phoneCode: '+977',
      phoneNumber: '',
      email: '',
      password: '',
    },
    validate: yupResolver(loginSchema(loginByEmail)),
  });

  const toggleLoginByEmail = () => {
    setLoginByEmail((prevData) => !prevData);
  };

  const handleSubmit = (values: any) => {
    console.log('SubmittedValues:', values);
    setCurrentStep((prevStep) => prevStep + 1);
  };

  return (
    <>
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
              {'Login'}
            </Title>
            <Divider my="xs" color={'neutral.3'} />
          </Box>
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
          {loginByEmail && (
            <InputPassword
              label="Password"
              placeholder="Enter Password"
              withAsterisk
              autoComplete="new-password"
              className="w-full"
              key={form.key('password')}
              {...form.getInputProps('password')}
            />
          )}
          <Flex justify={'space-between'} align={'center'} gap={8} w={'100%'}>
            <Checkbox
              // checked={checked}
              // onChange={(event) => setChecked(event.currentTarget.checked)}
              className="loginsignup-checkbox"
            />
            <Text className="body-2 flex-1" c={'neutral.7'}>
              Remember Login
            </Text>
            {loginByEmail && (
              <Link passHref href={'/forgot-password'}>
                <Title order={6} c={'neutral.10'} className="cursor-pointer">
                  Forgot Password?
                </Title>
              </Link>
            )}
          </Flex>
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
              Don&apos;t have an account?
            </Text>
            <Link href={'/sign-up'} passHref>
              <Title order={6} c={'primary.6'} className="cursor-pointer">
                SIGN UP
              </Title>
            </Link>
          </Flex>
        </Flex>
      </form>
    </>
  );
};
