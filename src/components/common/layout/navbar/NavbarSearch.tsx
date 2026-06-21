'use client';

import Input from '@/components/common/form/Input';
import { SEARCH_SUGGESTIONS } from '@/static/navbar';
import {
  Box,
  Popover,
  PopoverDropdown,
  PopoverTarget,
  Text,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr';
import { useState } from 'react';

type TNavbarSearch = {
  className?: string;
  maxWidth?: string;
};

const NavbarSearch = ({ className, maxWidth }: TNavbarSearch) => {
  const [keyword, setKeyword] = useState<string>('');

  const [opened, { open, close }] = useDisclosure(false);

  const handleSearch = () => {};

  const handleKeywordChange = (value: string) => {
    setKeyword(value);
  };

  const handleFocusInput = () => {
    open();
  };

  return (
    <Box
      maw={maxWidth ?? 533}
      className={`navbar-search flex-1 ${className ? className : ''}`}
    >
      <Popover
        opened={opened}
        position="bottom"
        width="target"
        offset={2}
        radius={0}
      >
        <PopoverTarget>
          <div
            onFocusCapture={handleFocusInput}
            onBlurCapture={() => close()}
            className="navbar-search-input"
          >
            <Input
              placeholder="Search Afro-Asian groceries, brands and more..."
              rightSection={
                <MagnifyingGlass
                  size={24}
                  color="#8B8B8B"
                  className="cursor-pointer"
                  onClick={handleSearch}
                />
              }
              onChange={(e) => handleKeywordChange(e.target.value)}
              value={keyword}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearch();
                }
              }}
            />
          </div>
        </PopoverTarget>

        <PopoverDropdown py={12} px={8} mih={100}>
          {SEARCH_SUGGESTIONS.map((item, index) => (
            <Box key={index} className="navbar-search-popover">
              <Text className="body-2">{item.label}</Text>
            </Box>
          ))}
        </PopoverDropdown>
      </Popover>
    </Box>
  );
};

export default NavbarSearch;
