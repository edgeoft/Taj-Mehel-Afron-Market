'use client';

import {
  Box,
  Button,
  Divider,
  Flex,
  PinInput,
  Text,
  Title,
} from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import { useEffect, useState } from 'react';
import { loginOTPSchema } from './loginSchema';

type TLoginOTP = {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

export const LoginOTPSection = ({ setCurrentStep }: TLoginOTP) => {
  const [remainingSecs, setRemainingSecs] = useState(59);
  const form = useForm({
    mode: 'uncontrolled',
    validateInputOnChange: true,
    initialValues: {
      loginOTP: '',
    },
    validate: yupResolver(loginOTPSchema),
  });

  useEffect(() => {
    if (remainingSecs > 0) {
      setTimeout(() => setRemainingSecs((prevSec) => prevSec - 1), 1000);
    }
  }, [remainingSecs]);

  const handleSubmit = (values: any) => {
    console.log('SubmittedValues:', values);
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
              Enter OPT
            </Title>
            <Divider my="xs" color={'neutral.3'} />
          </Box>
          <Flex justify={'flex-start'} align={'center'} gap={8}>
            <Text className="body-2" c={'neutral.9'}>
              We have sent you sms with 5 digit verification code (OTP) on +977
              040 815 1341 {'    '}
              <b
                onClick={() => setCurrentStep(1)}
                style={{ color: '#FF9933' }}
                className="cursor-pointer"
              >
                CHANGE
              </b>
            </Text>
          </Flex>
          <Box className="w-full">
            <PinInput
              length={5}
              key={form.key('loginOTP')}
              {...form.getInputProps('loginOTP')}
            />
          </Box>
          <Box w={'100%'}>
            <Button type="submit" w={'100%'}>
              Continue
            </Button>
          </Box>
          <Flex justify={'flex-start'} align={'center'} gap={8}>
            <Text className="body-2" c={'neutral.9'}>
              Did not receive any code?
            </Text>
            <Title order={6} c={'primary.6'} className="cursor-pointer">
              RESEND OTP
            </Title>
            <Text className="body-2" c={'neutral.9'}>
              in {remainingSecs}s
            </Text>
          </Flex>
        </Flex>
      </form>
    </>
  );
};
