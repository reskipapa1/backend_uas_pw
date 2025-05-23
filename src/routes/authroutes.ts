// src/routes/authroutes.ts
import { Router } from 'express';
import { register, login } from '../controllers/authcontroller';

const router = Router();

router.post('/register', register);
router.post('/login', login);

export default router;
