import * as yup from 'yup';
export const Signupschema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required().min(6),
    email: yup.string().email().required(),
  });