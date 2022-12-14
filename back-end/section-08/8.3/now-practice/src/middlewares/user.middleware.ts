import { Request, Response, NextFunction } from "express";
import statusCodes from "../statusCodes";

const validateFields = (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(statusCodes.BAD_REQUEST).json({ message: 'Fields are missing.' });
  }
  next();
}

export default validateFields;