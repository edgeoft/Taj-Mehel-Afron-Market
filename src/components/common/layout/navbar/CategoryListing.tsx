'use client';

import { NAVBAR_MEGA_MENU } from '@/static/navbar';
import { Accordion, Text } from '@mantine/core';
import { Minus, Plus } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import { useState } from 'react';

type Props = {
  close: () => void;
};

const CategoryListing = ({ close }: Props) => {
  const [activeItem, setActiveItem] = useState(NAVBAR_MEGA_MENU[0].title);

  const handleActiveItemChange = (data: any) => {
    setActiveItem((prevData) => (prevData !== data ? data : null));
  };

  const items = NAVBAR_MEGA_MENU.map(({ title, subCategories }, idx) => (
    <Accordion.Item key={idx} value={title}>
      <Accordion.Control
        className="body-2 cursor-pointer outline-0"
        chevron={
          activeItem === title ? (
            <Minus size={12} weight="bold" className="flex" />
          ) : (
            <Plus size={16} className="flex" />
          )
        }
      >
        {title}
      </Accordion.Control>
      <Accordion.Panel>
        {subCategories.map(({ title }, innerIdx) => (
          <Link
            key={innerIdx}
            href={`/products?categoryIds=${title}`}
            onClick={close}
          >
            <Text className="body-2 cursor-pointer">{title}</Text>
          </Link>
        ))}
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion
      value={activeItem}
      onChange={handleActiveItemChange}
      defaultValue={NAVBAR_MEGA_MENU[0].title}
      chevron={<Plus size={12} />}
      maw={300}
      unstyled
    >
      {items}
    </Accordion>
  );
};

export default CategoryListing;
