import type { NextFunction, Request, Response } from 'express';
import { prisma } from '../../db';
import { ConflictError, NotFoundError } from '../../utils/httpErrors';

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

export const getAll = async (req: Request, res: Response) => {
  const allCars = await prisma.car.findMany();
  res.status(200).json({ data: allCars });
};

export const getById = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  const car = await prisma.car.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!car) {
    return next(NotFoundError());
  }

  res.status(200).json({ data: car });
};
