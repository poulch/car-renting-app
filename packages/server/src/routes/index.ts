import express from 'express';
import type { Router } from 'express';
import { authRouter } from './authRouter';

export const getRoutes = (): Router => {
  const router = express.Router();

  router.use('/auth', authRouter);

  return router;
};
