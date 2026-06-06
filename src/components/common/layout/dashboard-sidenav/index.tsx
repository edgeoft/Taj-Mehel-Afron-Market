import { Card, Divider, Flex } from '@mantine/core';
import Link from 'next/link';
import React from 'react';

import { PROFILE_POPOVER_OPTIONS } from '@/static/navbar';
import SidenavItem from './SidenavItem';

import '@/styles/components/layout/__dashboardSidenav.scss';

type Props = {};

const DashboardSidenav = ({}: Props) => {
  return (
    <Card
      withBorder
      miw={200}
      w={200}
      p={8}
      display={{ base: 'none', lg: 'block' }}
      h={'fit-content'}
      pos={'sticky'}
      top={136}
    >
      <Flex direction={'column'} gap={16}>
        {PROFILE_POPOVER_OPTIONS.map((option) => (
          <React.Fragment key={option?.label}>
            {option?.link ? (
              <>
                <Link href={`/accounts/${option?.link}`}>
                  <SidenavItem
                    icon={option?.icon}
                    label={option?.label}
                    link={option?.link}
                  />
                </Link>

                <Divider className="w-full" />
              </>
            ) : (
              <SidenavItem icon={option?.icon} label={option?.label} />
            )}
          </React.Fragment>
        ))}
      </Flex>
    </Card>
  );
};

export default DashboardSidenav;
