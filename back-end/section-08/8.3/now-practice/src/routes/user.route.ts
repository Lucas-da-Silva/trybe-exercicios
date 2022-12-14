import { Router } from "express";
import userController from "../controllers/user.controller";
import validateFields from '../middlewares/user.middleware';

const router = Router();

router.get('/', userController.getAll);
router.get('/:id', userController.getById);
router.post('/', validateFields, userController.create);
router.put('/:id', validateFields, userController.update);

export default router;