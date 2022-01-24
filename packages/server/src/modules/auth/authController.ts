import type { Response, Request, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import { prisma } from '../../db';
import { BadRequestError, ConflictError, UnautorizedError } from '../../utils/httpErrors';
import { Role } from '@prisma/client';
import jwt from 'jsonwebtoken';

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

  res.status(200).json(token);
};

export const registerController = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password, confirmPassword, name } = req.body;

  if (password !== confirmPassword) {
    return next(BadRequestError('Passwords are not equal'));
  }

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
