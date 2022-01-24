import { object, string } from 'zod';

const isoDateRegExp =
  /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/;

const isISODate = (str: string) => isoDateRegExp.test(str);

export const carSchema = object({
  body: object({
    name: string({
      required_error: 'Name is required',
    }),
    vin: string({
      required_error: 'Vin is required',
    }).regex(
      new RegExp(/^[A-HJ-NPR-Za-hj-npr-z\d]{8}[\dX][A-HJ-NPR-Za-hj-npr-z\d]{2}\d{6}$/),
      'Vin number is not valid',
    ),
    reqistrationNumber: string({
      required_error: 'Registration number is required',
    }).regex(/^[A-Z]{2}([A-Z]|[0-9])[0-9]{4}$/, 'Registration number is not valid'),
    brand: string({
      required_error: 'Brand is required',
    }),
    model: string({
      required_error: 'Model is required',
    }),
    color: string({
      required_error: 'Color is required',
    }),
    reviewDate: string({
      required_error: 'Review data is required',
    }).refine(isISODate, { message: 'Review data is not a valid ISO string' }),
    insuranceData: string({
      required_error: 'Insurance data is required',
    }).refine(isISODate, { message: 'Insurance data is not a valid ISO string' }),
  }),
});
