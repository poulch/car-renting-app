import type { Request, Response } from 'express';

export const add = (req: Request, res: Response) => {
  res.status(200).send();
};
