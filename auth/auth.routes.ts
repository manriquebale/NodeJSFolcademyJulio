import { Router } from 'express';
import * as authController from './auth.controller'

const router = Router();

router.post('/signup', authController.signup); //registro
router.post('/login', authController.login);


module.exports = router