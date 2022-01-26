import type { Response, Request, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import { prisma } from '../../db';
import { ConflictError, UnautorizedError } from '../../utils/httpErrors';
import { Role } from '@prisma/client';
import jwt from 'jsonwebtoken';

const AUTH_COOKIE_TIL = 1000 * 60 * 60 * 8;

export const loginController = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    return next(UnautorizedError());
  }

  const userPasswordCorrect = await bcrypt.compare(password, user.password);

  if (!userPasswordCorrect) {
    return next(UnautorizedError());
  }

  const tokenSecret = process.env.TOKEN_SECRET || 'secret';
  const token = jwt.sign({ email }, tokenSecret);
  res.cookie('auth', token, { expires: new Date(Date.now() + AUTH_COOKIE_TIL) });

  res.status(200).json(user);
};

export const registerController = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password, name } = req.body;

  const currentUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (currentUser) {
    return next(ConflictError('User with such email already exists'));
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const createdUser = await prisma.user.create({
    data: {
      email,
      name,
      avatar: '',
      password: hashedPassword,
      role: Role.USER,
    },
  });

  res.status(201).json(createdUser);
};
