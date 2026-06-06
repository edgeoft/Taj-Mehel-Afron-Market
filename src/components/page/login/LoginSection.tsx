'use client';

import { Container } from '@mantine/core';
import { useState } from 'react';
import { LoginFormSection } from './LoginFormSection';
import { LoginOTPSection } from './LoginOTPSection';

type Props = {};

const LoginSection = (props: Props) => {
  const [currentStep, setCurrentStep] = useState(1);

  const renderLoginStep = () => {
    switch (currentStep) {
      case 1:
        return <LoginFormSection setCurrentStep={setCurrentStep} />;
      case 2:
        return <LoginOTPSection setCurrentStep={setCurrentStep} />;
      default:
        return <></>;
    }
  };

  return <Container>{renderLoginStep()}</Container>;
};

export default LoginSection;
