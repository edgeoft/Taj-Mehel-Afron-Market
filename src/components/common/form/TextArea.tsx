import { Textarea, TextareaProps } from '@mantine/core';

interface Props extends TextareaProps {}

const TextArea = ({ disabled, ...props }: Props) => {
  return (
    <Textarea
      resize="vertical"
      disabled={disabled}
      labelProps={{
        'data-disabled': disabled?.toString(),
      }}
      {...props}
    />
  );
};

export default TextArea;
