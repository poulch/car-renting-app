import express from 'express';
import * as carController from '../modules/car/carController';
import { validate } from '../middlewares/validateHandler';
import { carSchema, idParamSchema } from '../modules/car/carSchema';

export const carRouter = express.Router();

carRouter.post('/', validate(carSchema), carController.add);
carRouter.put(
  '/:id',
  validate(idParamSchema),
  validate(carSchema.deepPartial()),
  carController.update,
);
carRouter.get('/', carController.getAll);
carRouter.get('/:id', validate(idParamSchema), carController.getById);
carRouter.delete('/:id', validate(idParamSchema), carController.deleteById);
