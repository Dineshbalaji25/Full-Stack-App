import express from 'express';
import { loginUser, registerUser } from '../controllers/user.controller';

const router = express.Router();

// Only login route is needed
router.post('/login', loginUser);
router.post('/register', registerUser);

export default router;
