import { Text, UnstyledButton } from '@mantine/core';
import React from 'react';

type Props = {
  status: string;
};

const StatusButton = ({ status }: Props) => {
  let color = 'neutral.7';

  switch (status?.toLowerCase()) {
    case 'pending':
      color = 'neutral.7';
      break;
    case 'processed':
      color = 'orange';
      break;
    case 'completed':
      color = 'secondary';
      break;
    case 'cancelled':
      color = 'error';
      break;
  }
  return (
    <Text c={color} className="uppercase font-bold" fz={{ base: 12, md: 14 }}>
      {status}
    </Text>
  );
};

export default StatusButton;
