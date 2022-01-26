import { object, string } from 'zod';

export const clientSchema = object({
  body: object({
    company: string({
      required_error: 'Company is required',
    }),
    name: string({
      required_error: 'Name is required',
    }),
    address: string({
      required_error: 'Address is required',
    }),
    pesel: string({
      required_error: 'Pesel is required',
    }).regex(/^\d{11}$/, { message: 'Pesel is not valid' }),
  }),
});
