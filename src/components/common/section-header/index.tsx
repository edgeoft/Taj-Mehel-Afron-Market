import Link from 'next/link';
import {
  Button,
  Flex,
  Tabs,
  TabsList,
  TabsTab,
  Text,
  Title,
} from '@mantine/core';
import { CaretRight } from '@phosphor-icons/react/dist/ssr';

import { ListOption } from '@/types/generic';

import '@/styles/components/__sectionHeader.scss';

interface CommonProps {
  title?: string;
  link?: string;
}

type ConditionalProps =
  | {
      type: 'description';
      description: string;
      selectedOption?: never;
      handleOptionChange?: never;
      tabs?: never;
      tabWidth?: never;
    }
  | {
      type: 'tab';
      description?: never;
      selectedOption: string;
      handleOptionChange: (selectedOption: string) => void;
      tabs: ListOption[];
      tabWidth?: string | number;
    };

type Props = CommonProps & ConditionalProps;

const SectionHeader = ({
  title,
  type,
  description,
  link,
  tabs,
  selectedOption,
  handleOptionChange,
  tabWidth = 'auto',
}: Props) => {
  return (
    <Flex direction={'column'} gap={4} className="sectionHeader-container">
      <Title order={2} c={'neutral.10'}>
        {title}
      </Title>

      <Flex justify={'space-between'} align={'center'} gap={8}>
        {type === 'description' ? (
          <Text className="body-1" c="neutral.7">
            {description}
          </Text>
        ) : null}

        {type === 'tab' ? (
          <Tabs defaultValue={selectedOption} w={tabWidth}>
            <TabsList>
              {tabs?.length
                ? tabs?.map((tab) => (
                    <TabsTab
                      key={tab?.value}
                      value={tab?.value}
                      onClick={() => handleOptionChange(tab?.value)}
                    >
                      {tab?.label}
                    </TabsTab>
                  ))
                : null}
            </TabsList>
          </Tabs>
        ) : null}

        {link ? (
          <Link href={link} passHref>
            <Button
              variant="transparent"
              className="view-all-btn"
              rightSection={
                <CaretRight width={16} height={16} className="caret-icon" />
              }
            >
              View All
            </Button>
          </Link>
        ) : null}
      </Flex>
    </Flex>
  );
};

export default SectionHeader;
