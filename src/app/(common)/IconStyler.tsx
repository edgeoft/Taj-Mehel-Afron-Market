import { Flex } from '@mantine/core';

type Props = {
  children: React.ReactNode;
};

function IconStyler({ children }: Props) {
  return (
    <Flex p={4} className="icon-styler">
      {children}
    </Flex>
  );
}

export default IconStyler;
