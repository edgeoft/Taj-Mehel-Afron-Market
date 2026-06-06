import { ReactNode } from 'react';
import { Card, Stack } from '@mantine/core';

import FormSectionHeading from '../FormSectionHeading';

type Props = {
  title: string;
  children: ReactNode;
};

const OrderDetailCard = ({ title, children }: Props) => {
  return (
    <Card
      withBorder
      className="border rounded-sm"
      pt={16}
      px={{ base: 16, md: 32 }}
      pb={{ base: 16, md: 32 }}
    >
      <Stack gap={16}>
        <FormSectionHeading title={title} order={4} />
        {children}
      </Stack>
    </Card>
  );
};

export default OrderDetailCard;
