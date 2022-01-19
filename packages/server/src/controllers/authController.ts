import type { Response, Request, NextFunction } from 'express';
// import bcrypr from 'bcrypt';
// import { prisma } from '../db';
import { BadRequestError } from '../utils/httpErrors';

export const loginController = (req: Request, res: Response, next: NextFunction) => {
  return next(BadRequestError());
  // const { email, password } = req.body;

  // const user = await prisma.user.findUnique({
  //   where: {
  //     email,
  //   },
  // });

  // if (!user) {
  //   throw new Error('test');
  // }

  // const passwordCompare = bcrypr.compare(password, user.password);

  // if (!passwordCompare) {
  //   throw new Error('sdsdsd');
  // }
};
