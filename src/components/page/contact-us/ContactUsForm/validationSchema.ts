import * as yup from 'yup';
import { isMobilePhone } from 'validator';

export const contactUsValidation = yup.object().shape({
  name: yup.string().required('Fullname is required.'),
  email: yup.string().required('Email is required.').email('Email is invalid'),
  phoneCode: yup.string(),
  phoneNumber: yup
    .string()
    .required('Phone Number is required.')
    .test('phone', 'Invalid phone number', (value, { parent }) => {
      const phoneCode = parent.phoneCode;

      return isMobilePhone(`${phoneCode}${value}`);
    }),
  description: yup.string().required('Message is required.'),
});
