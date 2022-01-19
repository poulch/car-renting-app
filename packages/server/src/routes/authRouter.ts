import express from 'express';
import { loginController } from '../controllers/authController';

export const authRouter = express.Router();

authRouter.post('/login', loginController);
