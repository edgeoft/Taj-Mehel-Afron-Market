'use client';
import { Tabs, TabsList, TabsTab } from '@mantine/core';
import { useRouter, useSearchParams } from 'next/navigation';

import { ORDER_STATUS } from '@/static/order';

type Props = {};

const OrderFilter = ({}: Props) => {
  const searchParams = useSearchParams();
  const status = searchParams.get('status') || 'all';

  const router = useRouter();

  const handleOptionChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('status', value);

    const decodedParams = decodeURIComponent(params.toString());
    router.push(`?${decodedParams}`);
  };

  return (
    <Tabs defaultValue={status as string} w={'100%'}>
      <TabsList>
        {ORDER_STATUS?.length
          ? ORDER_STATUS?.map((tab) => (
              <TabsTab
                key={tab?.value}
                value={tab?.value}
                onClick={() => handleOptionChange(tab?.value)}
              >
                {tab?.label}
              </TabsTab>
            ))
          : null}
      </TabsList>
    </Tabs>
  );
};

export default OrderFilter;
