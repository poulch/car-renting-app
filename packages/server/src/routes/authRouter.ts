import express from 'express';
import { validate } from '../middlewares/validateHandler';
import * as auth from '../modules/auth';

export const authRouter = express.Router();

authRouter.post('/login', validate(auth.loginValidation), auth.loginController);
authRouter.post('/register', validate(auth.registerValidation), auth.registerController);
