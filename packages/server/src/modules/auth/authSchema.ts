import { object, string } from 'zod';

export const registerValidation = object({
  body: object({
    email: string({
      required_error: 'Email is required',
    }).email('Not a valid email'),
    name: string({
      required_error: 'Name is required',
    }),
    password: string({
      required_error: 'Password is required',
    }),
    confirmPassword: string({
      required_error: 'confirmPassword is required',
    }),
  }),
});

export const loginValidation = object({
  body: object({
    email: string({
      required_error: 'Email is required',
    }).email('Not a valid email'),
    password: string({
      required_error: 'Password is required',
    }),
  }),
});
