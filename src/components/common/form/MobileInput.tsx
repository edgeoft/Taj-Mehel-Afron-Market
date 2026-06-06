'use client';
import {
  Box,
  Divider,
  Flex,
  InputError,
  InputLabel,
  Select,
  TextInput,
  TextInputProps,
} from '@mantine/core';
import {
  CaretDown,
  CheckCircle,
  WarningCircle,
} from '@phosphor-icons/react/dist/ssr';
import { UseFormReturnType } from '@mantine/form';

import { countryCodes } from '@/static/countryCode';

interface Props extends TextInputProps {
  countryCodeFieldName?: string;
  mobileFieldName?: string;
  isValid?: boolean;
  withinPortal?: boolean;
  forms?: UseFormReturnType<any>;
  phoneCodeName?: string;
  phoneNumberName?: string;
}

const MobileInput = ({
  label,
  placeholder,
  required = false,
  error,
  rightSection,
  countryCodeFieldName,
  mobileFieldName,
  isValid,
  disabled = false,
  withinPortal = true,
  description,
  forms,
  phoneCodeName,
  phoneNumberName,
  ...props
}: Props) => {
  return (
    <Box className={`mobile__input-container`}>
      {label ? (
        <InputLabel data-disabled={`${disabled}`} required={required}>
          {label}
        </InputLabel>
      ) : null}
      <Box
        className={`mobile__input ${disabled ? 'disabled--input' : ''}`}
        data-error={error ? true : false}
        data-valid={isValid}
        pos={'relative'}
      >
        <Select
          data={countryCodes.map((code) => ({
            label: code?.dial_code,
            value: code?.dial_code,
          }))}
          defaultValue={'+977'}
          searchable
          rightSectionPointerEvents="none"
          rightSection={<CaretDown size={12} color={'#9B9B9B'} />}
          allowDeselect={false}
          key={forms?.key(phoneCodeName || 'phoneCode')}
          {...forms?.getInputProps(phoneCodeName || 'phoneCode')}
          disabled={disabled}
          comboboxProps={{ withinPortal }}
        />

        <Divider orientation="vertical" />

        <TextInput
          placeholder={placeholder}
          type="number"
          key={forms?.key(phoneNumberName || 'phoneNumber')}
          {...forms?.getInputProps(phoneNumberName || 'phoneNumber')}
          disabled={disabled}
          description={description}
          {...props}
          error={false}
        />

        {error ? (
          <Flex
            pos={'absolute'}
            right={0}
            px={12}
            justify={'center'}
            align={'center'}
          >
            <WarningCircle color="red" weight="fill" size={18} />
          </Flex>
        ) : isValid ? (
          <Flex
            pos={'absolute'}
            right={0}
            px={12}
            justify={'center'}
            align={'center'}
          >
            <CheckCircle color="#18984F" weight="fill" size={18} />
          </Flex>
        ) : (
          rightSection
        )}
      </Box>

      {error ? <InputError>{error}</InputError> : null}
    </Box>
  );
};

export default MobileInput;
