'use client';

import { images } from '@/assets';
import Input from '@/components/common/form/Input';
import {
  Box,
  BoxComponentProps,
  Divider,
  Flex,
  Radio,
  RadioGroup,
  Title,
} from '@mantine/core';
import { CreditCard, PencilSimple } from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';
import { useState } from 'react';

interface TPaymentOptProps extends BoxComponentProps {}

export default function PaymentOptionsSection(props: TPaymentOptProps) {
  const [radioOpt, setRadioOpt] = useState<string | null>('cashOnDelivery');

  function renderPaymentOpt() {
    switch (radioOpt) {
      case 'cashOnDelivery':
        return <></>;
        break;

      case 'onlinePayment':
        return <OnlinePayment />;
        break;

      case 'cardPayment':
        return <CardPayment />;
        break;

      default:
        return <></>;
    }
  }

  return (
    <Box
      mb={16}
      bd={'1px solid neutral.3'}
      bg={'neutral.0'}
      className="checkout-paymentOpt-container"
      {...props}
    >
      <Title order={2} className="heading-4" c={'neutral.10'}>
        Payment Option
      </Title>

      <Divider mt={8} mb={16} color={'neutral.3'} />

      <RadioGroup
        value={radioOpt}
        onChange={setRadioOpt}
        className="checkout-paymentOpt-radio"
      >
        <Radio size="xs" value="cashOnDelivery" label="Cash on Delivery" />
        <Radio size="xs" value="onlinePayment" label="Online Payment" />
        <Radio size="xs" value="cardPayment" label="Card Payment" />
      </RadioGroup>

      {renderPaymentOpt()}
    </Box>
  );
}

function OnlinePayment() {
  return (
    <Flex justify={'flex-start'} align={'center'} wrap={'wrap'} gap={16}>
      <Image
        src={images.esewa}
        alt="Product One"
        width={90}
        height={42}
        className="object-cover"
      />
      <Image
        src={images.khalti}
        alt="Product One"
        width={90}
        height={42}
        className="object-cover"
      />
    </Flex>
  );
}

function CardPayment() {
  const [showCardForm, setShowCardForm] = useState(false);

  return (
    <>
      {showCardForm ? (
        <>
          <Input
            label="Card Number"
            placeholder="**** **** **** ****"
            required
            rightSection={<CreditCard size={18} />}
            mb={24}
          />
          <Flex justify={'space-between'} align={'center'} gap={16}>
            <Input
              label="Expiration (MM/YY)"
              placeholder="MM/YY"
              required
              className="flex-1"
            />
            <Input
              label="Card Security Code"
              placeholder="CSC"
              required
              className="flex-1"
            />
          </Flex>
        </>
      ) : (
        <Input
          placeholder="Master Card: **** **** 7788 6677"
          required
          leftSection={
            <Image
              src={images.masterCard}
              alt="masterd_card"
              width={24}
              height={24}
              className="object-cover curson-pointer"
            />
          }
          rightSection={
            <PencilSimple size={18} onClick={() => setShowCardForm(true)} />
          }
          className="checkout-mastercardInput"
        />
      )}
    </>
  );
}
