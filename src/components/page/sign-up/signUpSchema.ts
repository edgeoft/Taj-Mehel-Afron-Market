import * as yup from 'yup';
import { isMobilePhone } from 'validator';
import { checkStrongPassword } from '@/utils/common';

export const signUpSchema = (loginByEmail: boolean) => {
  return yup.object().shape({
    name: yup.string().required('Fullname is required.'),
    email: loginByEmail
      ? yup.string().required('Email is required.').email('Email is invalid')
      : yup.string(),
    phoneCode: yup.string(),
    phoneNumber: loginByEmail
      ? yup.string()
      : yup
          .string()
          .required('Phone Number is required.')
          .test('phone', 'Invalid phone number', (value, { parent }) => {
            const phoneCode = parent.phoneCode;

            return isMobilePhone(`${phoneCode}${value}`);
          }),
    password: yup
      .string()
      .test('password', 'Enter strong password', (value) => {
        if (!value) return;
        return checkStrongPassword(value!);
      })
      .required('Password is required.'),
  });
};
