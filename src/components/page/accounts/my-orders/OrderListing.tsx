import { Button, Stack, Text } from '@mantine/core';
import dayjs from 'dayjs';
import Link from 'next/link';

import CustomTable from '@/components/common/table/CustomTable';
import { orders } from '@/static/order';
import { ColumnDef } from '@/types/generic';
import { Order } from '@/types/order';
import { formatPriceInRs } from '@/utils/price';
import StatusButton from '@/components/common/StatusButton';

type Props = {};

const OrderListing = ({}: Props) => {
  const columns: ColumnDef<Order | null>[] = [
    {
      accessorKey: 'orderId',
      header: 'Order Id',
    },
    {
      accessorKey: 'createdAt',
      header: 'Placed On',
      cell: ({ row }) => (
        <Stack gap={4}>
          <Text className="body-2" c={'neutral.9'}>
            {dayjs(row?.createdAt).format('DD/MM/YYYY')}
          </Text>
          <Text className="body-2" c={'neutral.9'}>
            {dayjs(row?.createdAt).format('hh:mm A')}
          </Text>
        </Stack>
      ),
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ row }) => <StatusButton status={row?.status!} />,
    },
    {
      accessorKey: 'items',
      header: 'Items',
    },
    {
      accessorKey: 'total',
      header: 'Total',
      cell: ({ row }) => `${formatPriceInRs(Number(row?.total))}`,
    },
    {
      accessorKey: 'action',
      header: 'Action',
      cell: ({ row }) => (
        <Link href={`/accounts/my-orders/${row?.orderId}`} passHref>
          <Button variant="secondary-transparent">View Order</Button>
        </Link>
      ),
    },
  ];
  return <CustomTable columns={columns} rows={orders} totalPages={2} />;
};

export default OrderListing;
