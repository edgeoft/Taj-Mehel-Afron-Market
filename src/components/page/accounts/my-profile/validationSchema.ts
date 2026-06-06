import * as yup from 'yup';
import { isMobilePhone } from 'validator';

export const myProfileSchema = yup.object().shape({
  name: yup.string().required('Fullname is required.'),
  email: yup.string().required('Email is required.').email('Email is invalid'),
  companyName: yup.string().optional(),
  phoneCode: yup.string(),
  phoneNumber: yup
    .string()
    .required('Phone Number is required.')
    .test('phone', 'Invalid phone number', (value, { parent }) => {
      const phoneCode = parent.phoneCode;

      return isMobilePhone(`${phoneCode}${value}`);
    }),
  streetAddress: yup.string().required('Street Address is required.'),
  city: yup.string().required('City is required.'),
  state: yup.string().required('State is required.'),
  zipCode: yup.string().optional(),
});
