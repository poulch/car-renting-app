import type { NextFunction, Request, Response } from 'express';
import type { AnyZodObject } from 'zod';
import { ZodError } from 'zod';
import { RESPONSE } from '../utils/constants';
import { BadRequestError } from '../utils/httpErrors';

export const validate =
  (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (e) {
      if (e instanceof ZodError) {
        const { fieldErrors } = e.flatten();
        return next(BadRequestError(RESPONSE.BAD_REQUEST, fieldErrors));
      }

      next(BadRequestError());
    }
  };
