import { Select, SelectProps } from '@mantine/core';
import { CaretDown } from '@phosphor-icons/react/dist/ssr';

interface Props extends SelectProps {}

const BorderlessSelect = ({ disabled, ...props }: Props) => {
  return (
    <Select
      {...props}
      disabled={disabled}
      rightSection={<CaretDown size={18} />}
      labelProps={{
        'data-disabled': disabled?.toString(),
      }}
      className="borderless-select"
    />
  );
};

export default BorderlessSelect;
