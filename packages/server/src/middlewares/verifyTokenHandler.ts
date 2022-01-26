import type { NextFunction, Request, Response } from 'express';
import { UnautorizedError } from '../utils/httpErrors';
import jwt from 'jsonwebtoken';

export const verifyTokenHandler = (req: Request, res: Response, next: NextFunction) => {
  const { auth: authCookie } = req.cookies;

  if (!authCookie) {
    next(UnautorizedError());
  }

  try {
    const tokenSecret = process.env.TOKEN_SECRET || 'secret';
    jwt.verify(authCookie, tokenSecret);
    next();
  } catch (e) {
    next(UnautorizedError());
  }
};
