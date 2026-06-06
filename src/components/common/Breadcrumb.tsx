import { TBreadCrumb } from '@/types/generic';
import { Anchor, Breadcrumbs } from '@mantine/core';
import { CaretRight } from '@phosphor-icons/react/dist/ssr';

type TDetailPageProps = {
  data: TBreadCrumb;
};

export default function BreadCrumb({ data }: TDetailPageProps) {
  const items = data
    ?.filter((item) => item?.title)
    ?.map((item, index) => (
      <Anchor
        href={item?.href}
        key={index}
        c="neutral.6"
        fz={{ base: 12, md: 14 }}
        fw={item.href ? 400 : 700}
        td={'none'}
      >
        {item.title}
      </Anchor>
    ));

  const separator = <CaretRight size={16} color="#8B8B8B" weight="bold" />;

  return (
    <Breadcrumbs
      separator={separator}
      separatorMargin="4"
      mb={{ base: 16, md: 24 }}
    >
      {items}
    </Breadcrumbs>
  );
}
