import { object, string } from 'zod';

export const idParamSchema = object({
  params: object({
    id: string().refine((id) => !Number.isNaN(Number(id)), { message: 'Id must be numberical' }),
  }),
});
