import BreadCrumb from '@/components/common/Breadcrumb';
import AccountCard from '@/components/common/card/AccountCard.tsx';
import { PROFILE_POPOVER_OPTIONS } from '@/static/navbar';
import { Container, Divider, Flex } from '@mantine/core';
import React from 'react';

type Props = {};

const AccountsPage = ({}: Props) => {
  const breadCrumb = [
    { id: '1', title: 'Home', href: '/' },
    {
      id: '2',
      title: 'Accounts',
    },
  ];
  return (
    <Container className="padding-b-72" mih={'80dvh'}>
      <BreadCrumb data={[...breadCrumb]} />

      <Flex
        gap={16}
        wrap={'wrap'}
        align={{ base: 'flex-start', md: 'center' }}
        direction={{ base: 'column', md: 'row' }}
        mt={{ base: 16, md: 0 }}
      >
        {PROFILE_POPOVER_OPTIONS.map((option, index) => {
          const display =
            index + 1 !== PROFILE_POPOVER_OPTIONS?.length ? 'display' : 'none';
          return (
            <React.Fragment key={option?.label}>
              <AccountCard
                icon={option.icon}
                label={option.label}
                link={option.link}
              />

              <Divider
                className="w-full"
                display={{ base: display, md: 'none' }}
              />
            </React.Fragment>
          );
        })}
      </Flex>
    </Container>
  );
};

export default AccountsPage;
