import * as yup from 'yup';
import { isMobilePhone } from 'validator';

export const interiorDesignFormSchema = yup.object().shape({
  name: yup.string().required('Fullname is required.'),
  category: yup.string().required('Category is required.'),
  description: yup.string().required('Description is required.'),
  phoneCode: yup.string(),
  phoneNumber: yup
    .string()
    .required('Phone Number is required.')
    .test('phone', 'Invalid phone number', (value, { parent }) => {
      const phoneCode = parent.phoneCode;

      return isMobilePhone(`${phoneCode}${value}`);
    }),
});
