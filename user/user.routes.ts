import { Router } from 'express';
import * as userController from './user.controller'
import { authMiddleware } from '../auth/auth.middleware';

const router = Router();

router.get('/', authMiddleware, userController.index);
router.get('/:id', authMiddleware, userController.show);
router.delete('/:id', authMiddleware, userController.destroy);


module.exports = router