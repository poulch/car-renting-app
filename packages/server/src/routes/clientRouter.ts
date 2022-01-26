import express from 'express';
import { validate } from '../middlewares/validateHandler';
import { carSchema } from '../modules/car/carSchema';
import * as clientController from '../modules/client/clientController';
import { clientSchema } from '../modules/client/clientSchema';
import { idParamSchema } from '../utils/globalSchema';

export const clientRouter = express.Router();

clientRouter.post('/', validate(clientSchema), clientController.add);
clientRouter.put(
  '/:id',
  validate(idParamSchema),
  validate(carSchema.deepPartial()),
  clientController.update,
);
clientRouter.get('/', clientController.getAll);
clientRouter.get('/:id', validate(idParamSchema), clientController.getById);
clientRouter.delete('/:id', validate(idParamSchema), clientController.deleteById);
