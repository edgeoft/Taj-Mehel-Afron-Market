import { Select, SelectProps } from '@mantine/core';
import { CaretDown } from '@phosphor-icons/react/dist/ssr';

interface Props extends SelectProps {}

const SelectInput = ({ disabled, ...props }: Props) => {
  return (
    <Select
      {...props}
      disabled={disabled}
      rightSection={props.rightSection ?? <CaretDown size={18} />}
      labelProps={{
        'data-disabled': disabled?.toString(),
      }}
    />
  );
};

export default SelectInput;
