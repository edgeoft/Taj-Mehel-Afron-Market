'use client';

import { NAVBAR_MEGA_MENU } from '@/static/navbar';
import {
  Box,
  Button,
  Container,
  Flex,
  Menu,
  MenuDropdown,
  MenuItem,
  MenuTarget,
  SimpleGrid,
  Text,
  Title,
} from '@mantine/core';
import { CaretRight, Minus, Plus } from '@phosphor-icons/react/dist/ssr';
import { SyntheticEvent, useState } from 'react';
import FreeDeliveryInfo from './FreeDeliveryInfo';
import Link from 'next/link';
import { TNavbarMegaMenuItem, TSubCatItem } from '@/types/navbar';

const MegaMenu = () => {
  const [activeTabIdx, setActiveTabIdx] = useState<number | null>(null);

  const handleClick = () => {};

  const handleMenuOpen = (data: number) => {
    setActiveTabIdx(() => data);
  };

  const handleMenuClose = () => {
    setActiveTabIdx(() => null);
  };

  // function to convert the array into groups of any numbers
  const groupArrayByNumber = (array: Array<TSubCatItem>, chunkSize: number) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  const handleSubCategoryClick = (e: SyntheticEvent) => {
    e.stopPropagation();
  };

  return (
    <Box className={`navbar-bottom`} bg={'neutral.2'}>
      <Container h={48}>
        <Flex justify={'space-between'} align={'center'} h={'100%'} w={'100%'}>
          <Flex
            justify={'flex-start'}
            align={'center'}
            gap={32}
            w={'max-content'}
            h={'100%'}
          >
            {NAVBAR_MEGA_MENU.map(
              (item: TNavbarMegaMenuItem, index: number) => (
                <Menu
                  key={index}
                  trigger="hover"
                  width={'100%'}
                  offset={-10}
                  styles={{
                    dropdown: {
                      transition: 'none',
                    },
                    item: {
                      transition: 'none',
                    },
                  }}
                >
                  <MenuTarget>
                    <Link
                      passHref
                      href={`/categories/${item?.slug}`}
                      className="h-full"
                      onMouseEnter={() => handleMenuOpen(index)}
                      onMouseLeave={handleMenuClose}
                    >
                      <Button
                        rightSection={
                          activeTabIdx === index ? (
                            <Minus weight="bold" />
                          ) : (
                            <Plus />
                          )
                        }
                        variant="transparent"
                        onClick={handleClick}
                        className={`navbar-bottom-buttons ${activeTabIdx === index ? 'navbar-bottom-buttons-activeButton' : ''}`}
                      >
                        {item.title}
                      </Button>
                    </Link>
                  </MenuTarget>

                  <MenuDropdown
                    px={80}
                    py={32}
                    left={0}
                    mt={10}
                    onMouseEnter={() => handleMenuOpen(index)}
                    onMouseLeave={handleMenuClose}
                  >
                    <MenuItem
                      onClick={() => {}}
                      className="navbar-bottom-megamenu"
                    >
                      <Flex
                        justify={'flex-start'}
                        align={'flex-start'}
                        h={'100%'}
                        w={'100%'}
                        gap={32}
                      >
                        <Box maw={272}>
                          <Title
                            order={2}
                            className="font-size-20"
                            c={'neutral.9'}
                            mb={16}
                          >
                            Innovate your space with cutting-edge electronics
                          </Title>
                          <Button
                            rightSection={<CaretRight />}
                            variant="transparent"
                            c={'#3E7742'}
                            className="navbar-bottom-button"
                          >
                            Shop Now
                          </Button>
                        </Box>
                        <SimpleGrid
                          cols={{ base: 2, lg: 3, xl: 3 }}
                          spacing={32}
                        >
                          {groupArrayByNumber(item.subCategories, 4).map(
                            (subItem, subIndex) => (
                              <Box key={subIndex} miw={200} h={'100%'}>
                                {subItem.map(
                                  (
                                    innerItem: TSubCatItem,
                                    innerIndex: number
                                  ) => (
                                    <Link
                                      key={innerIndex}
                                      href={`/products/?categoryIds=${innerItem?.title}`}
                                    >
                                      <Text
                                        className="body-2 cursor-pointer"
                                        mb={12}
                                        c={'neutral.7'}
                                        onClick={handleSubCategoryClick}
                                      >
                                        {innerItem.title}
                                      </Text>
                                    </Link>
                                  )
                                )}
                              </Box>
                            )
                          )}
                        </SimpleGrid>
                      </Flex>
                    </MenuItem>
                  </MenuDropdown>
                </Menu>
              )
            )}
          </Flex>
          <FreeDeliveryInfo />
        </Flex>
      </Container>
    </Box>
  );
};

export default MegaMenu;
