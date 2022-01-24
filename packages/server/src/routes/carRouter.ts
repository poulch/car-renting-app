import express from 'express';
import * as carController from '../modules/car/carController';
import { validate } from '../middlewares/validateHandler';
import { carSchema } from '../modules/car/carSchema';

export const carRouter = express.Router();

carRouter.post('/', validate(carSchema), carController.add);
carRouter.put('/', carController.add);
carRouter.delete('/', carController.add);
carRouter.get('/', carController.add);
