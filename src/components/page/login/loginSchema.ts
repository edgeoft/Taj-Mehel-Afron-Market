import { checkStrongPassword } from '@/utils/common';
import { isMobilePhone } from 'validator';
import * as yup from 'yup';

export const loginSchema = (loginByEmail: boolean) => {
  return yup.object().shape({
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
    password: loginByEmail
      ? yup.string().required('Password is required.')
      : yup.string(),
  });
};

export const loginOTPSchema = yup.object().shape({
  loginOTP: yup.string().required('OTP is required.'),
});
