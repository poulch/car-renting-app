import express from 'express';
import type { Router } from 'express';
import { authRouter } from './authRouter';
import { carRouter } from './carRouter';
import { clientRouter } from './clientRouter';
import { verifyTokenHandler } from '../middlewares/verifyTokenHandler';

export const getRoutes = (): Router => {
  const router = express.Router();

  router.use('/auth', authRouter);
  router.use('/car', verifyTokenHandler, carRouter);
  router.use('/client', verifyTokenHandler, clientRouter);

  return router;
};
