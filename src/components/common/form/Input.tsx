import { TextInput, TextInputProps } from '@mantine/core';
import { CheckCircle, WarningCircle } from '@phosphor-icons/react/dist/ssr';

interface Props extends TextInputProps {
  isValid?: boolean;
  showVerifyAction?: boolean;
}

const Input = ({
  disabled,
  error,
  rightSection,
  isValid = false,
  showVerifyAction,
  ...props
}: Props) => {
  return (
    <TextInput
      {...props}
      error={error}
      data-valid={isValid}
      labelProps={{
        'data-disabled': disabled?.toString(),
      }}
      disabled={disabled}
      rightSection={
        error ? (
          <WarningCircle color="red" weight="fill" size={18} />
        ) : isValid ? (
          <CheckCircle color="#18984F" weight="fill" size={18} />
        ) : (
          rightSection
        )
      }
    />
  );
};

export default Input;
