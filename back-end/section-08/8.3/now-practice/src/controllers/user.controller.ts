import { Request, Response } from 'express';
import userService from '../services/user.service';
import statusCodes from '../statusCodes';

const getAll = async (_req: Request, res: Response) => {
  const users = await userService.getAll();
  res.status(statusCodes.OK).json(users);
};

const getById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const user = await userService.getById(id);
  res.status(statusCodes.OK).json(user);
};

const create = async (req: Request, res: Response) => {
  const { type, message } = await userService.create(req.body);
  if (type) return res.status(statusCodes.BAD_REQUEST).json({ message });
  res.status(statusCodes.CREATED).json(message);
};

const update = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { type, message } = await userService.update(id, req.body);
  if (type) return res.status(statusCodes.BAD_REQUEST).json({ message });
  res.status(statusCodes.OK).json(message);
};

export default { getAll, getById, create, update };
