import { PROFILE_POPOVER_OPTIONS } from '@/static/navbar';
import { getIconFromText } from '@/utils/icon';
import {
  Avatar,
  Flex,
  Menu,
  MenuDropdown,
  MenuItem,
  MenuTarget,
  Text,
} from '@mantine/core';
import { CaretDown, SignOut } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import React from 'react';

const ProfilePopover = () => {
  return (
    <Menu width={200} withinPortal={false}>
      <MenuTarget>
        <Flex gap={8} align={'center'} className="cursor-pointer">
          <Avatar
            src={
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwRPWpO-12m19irKlg8znjldmcZs5PO97B6A&s'
            }
            alt="Profile_Pic"
            color="primary"
            size={40}
          />

          <Text className="body-2" truncate unselectable="on">
            Joe Doe
          </Text>

          <CaretDown size={16} />
        </Flex>
      </MenuTarget>

      <MenuDropdown py={4} px={10}>
        {PROFILE_POPOVER_OPTIONS.map((menuItem) => (
          <Link
            key={menuItem?.label}
            href={menuItem?.link ? `/accounts/${menuItem?.link}` : '#'}
          >
            <MenuItem my={10} leftSection={getIconFromText(menuItem?.icon)}>
              {menuItem?.label}
            </MenuItem>
          </Link>
        ))}
      </MenuDropdown>
    </Menu>
  );
};

export default ProfilePopover;
