import express from 'express';
import { UserController } from './User.controller';

const router = express.Router();

router.post('/login', UserController.loginUser);

export const UserRouter = router;
