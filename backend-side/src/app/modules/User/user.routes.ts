import express from 'express';
import { UserController } from './user.controller';

const router = express.Router();

router.post('/', UserController.createUser);
router.get('/', UserController.getAllUser);
router.get('/:id', UserController.getSingleUserData);
router.patch('/:id', UserController.updateUserData);
router.delete('/:id', UserController.deleteUser);

export const UserRoutes = router;
