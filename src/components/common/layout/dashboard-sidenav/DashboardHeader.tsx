'use client';
import { useEffect, useState } from 'react';
import { useParams, usePathname } from 'next/navigation';

import BreadCrumb from '../../Breadcrumb';
import { TBreadCrumb } from '@/types/generic';

type Props = {};

const DashboardHeader = ({}: Props) => {
  const pathname = usePathname();

  const params = useParams();
  const { slug } = params;

  const [dynamicData, setDynamicData] = useState<TBreadCrumb>([]);

  useEffect(() => {
    const pathMap: { [key: string]: TBreadCrumb } = {
      '/accounts/my-profile': [{ id: '3', title: 'My Profile' }],
      '/accounts/my-address': [{ id: '3', title: 'My Address' }],
      '/accounts/my-orders': [{ id: '3', title: 'My Orders' }],
      [`/accounts/my-orders/${slug}`]: [
        { id: '3', title: 'My Orders', href: '/accounts/my-orders' },
        { id: '4', title: `Order #${slug}` },
      ],
      '/accounts/favourites': [{ id: '3', title: 'Favourites' }],
    };

    setDynamicData(pathMap[pathname] || []);
  }, [pathname, slug]);

  const breadCrumb = [
    { id: '1', title: 'Home', href: '/' },
    {
      id: '2',
      title: 'Accounts',
      href: '/accounts',
    },
  ];

  return <BreadCrumb data={[...breadCrumb, ...dynamicData]} />;
};

export default DashboardHeader;
