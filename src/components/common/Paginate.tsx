'use client';

import { Pagination, PaginationProps } from '@mantine/core';
import { useRouter, useSearchParams } from 'next/navigation';

interface Props extends PaginationProps {}

const Paginate = ({ ...props }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get('page') || '1';

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(`page`, page?.toString());
    router.push(`?${params.toString()}`);
  };

  return (
    <Pagination {...props} value={Number(page)} onChange={handlePageChange} />
  );
};

export default Paginate;
