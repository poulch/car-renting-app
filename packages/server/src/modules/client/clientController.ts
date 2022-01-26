import type { Request, Response, NextFunction } from 'express';
import { prisma } from '../../db';
import { ConflictError, NotFoundError } from '../../utils/httpErrors';

export const add = async (req: Request, res: Response, next: NextFunction) => {
  const { company, name, address, pesel } = req.body;

  const existingClient = await prisma.client.findUnique({
    where: {
      pesel: Number(pesel),
    },
  });

  if (existingClient) {
    return next(ConflictError());
  }

  const newClient = await prisma.client.create({
    data: {
      company,
      name,
      address,
      pesel: Number(pesel),
    },
  });

  res.status(200).json({ data: newClient });
};

export const update = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  const existingClient = await prisma.client.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!existingClient) {
    return next(NotFoundError());
  }

  const updatedClient = await prisma.client.update({
    where: {
      id: Number(id),
    },
    data: req.body,
  });

  res.status(200).json({ data: updatedClient });
};

export const getById = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  const clientById = await prisma.client.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!clientById) {
    return next(NotFoundError());
  }

  res.status(200).json({ data: clientById });
};

export const getAll = async (req: Request, res: Response) => {
  const allClients = await prisma.client.findMany();
  res.status(200).json({ data: allClients });
};

export const deleteById = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  const existingClient = await prisma.client.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!existingClient) {
    return next(NotFoundError());
  }

  await prisma.client.delete({
    where: {
      id: Number(id),
    },
  });

  res.status(200).json({ data: existingClient });
};
