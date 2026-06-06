'use client';

import { PasswordInput, PasswordInputProps } from '@mantine/core';
import { Eye, EyeClosed } from '@phosphor-icons/react/dist/ssr';

interface Props extends PasswordInputProps {}

const InputPassword = ({ error, rightSection, ...props }: Props) => {
  return (
    <PasswordInput
      {...props}
      error={error}
      visibilityToggleIcon={({ reveal }) =>
        !reveal ? (
          <EyeClosed size={18} color={'#212121'} weight="bold" />
        ) : (
          <Eye size={18} color={'#212121'} weight="bold" />
        )
      }
    />
  );
};

export default InputPassword;
