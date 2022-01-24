import express from 'express';
import type { Router } from 'express';
import { authRouter } from './authRouter';
import { carRouter } from './carRouter';

export const getRoutes = (): Router => {
  const router = express.Router();

  router.use('/auth', authRouter);
  router.use('/car', carRouter);

  return router;
};
