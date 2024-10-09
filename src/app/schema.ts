import * as yup from 'yup';

export const questionSchema = yup.object({
  phone: yup.string().required('введите номер телефона'),
  comment: yup.string(),
  'personal-info': yup.boolean(),
  'personal-info-2': yup.boolean(),
});
