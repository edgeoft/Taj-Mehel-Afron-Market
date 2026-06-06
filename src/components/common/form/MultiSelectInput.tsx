import { MultiSelect, MultiSelectProps } from '@mantine/core';
import { CaretDown } from '@phosphor-icons/react/dist/ssr';

interface Props extends MultiSelectProps {}

const MultiSelectInput = ({ disabled, ...props }: Props) => {
  return (
    <MultiSelect
      {...props}
      disabled={disabled}
      rightSection={props.rightSection ?? <CaretDown size={18} />}
      labelProps={{
        'data-disabled': disabled?.toString(),
      }}
    />
  );
};

export default MultiSelectInput;
