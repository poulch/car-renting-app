import type { NextFunction, Request, Response } from 'express';
import { prisma } from '../../db';
import { ConflictError } from '../../utils/httpErrors';

export const add = async (req: Request, res: Response, next: NextFunction) => {
  const { name, vin, reqistrationNumber, brand, model, color, reviewDate, insuranceData } =
    req.body;

  const currentCar = await prisma.car.findMany({
    where: {
      OR: [{ vin }, { reqistrationNumber }],
    },
  });

  if (currentCar.length > 0) {
    return next(ConflictError());
  }

  const newCar = await prisma.car.create({
    data: {
      brand,
      color,
      insuranceData,
      model,
      name,
      reqistrationNumber,
      reviewDate,
      vin,
    },
  });

  res.status(200).json({ data: newCar });
};
