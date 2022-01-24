import type { NextFunction, Request, Response } from 'express';
import { RESPONSE, STATUS } from '../utils/constants';
import { HttpError } from '../utils/httpErrors';

export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof HttpError) {
    res.status(error.status);

    if (error.validationErrorMessages) {
      res.json({ error: error.validationErrorMessages });
    } else {
      res.json({ error: error.message });
    }
  } else {
    console.error(error, `SERVER ERROR at ${req.path}:`);
    res.status(STATUS.INTERNAL_ERROR).json({ error: RESPONSE.INTERNAL_ERROR });
  }

  next();
};
