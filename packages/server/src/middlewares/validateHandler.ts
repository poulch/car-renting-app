import type { NextFunction, Request, Response } from 'express';
import type { AnyZodObject } from 'zod';
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
      console.log(e);

      next(BadRequestError());
    }
  };
