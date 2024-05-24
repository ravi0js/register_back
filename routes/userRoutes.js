import express from 'express';
import upload from '../config/multerConfig.js';
import { registerUser, getUsers } from '../controllers/userController.js';

const router = express.Router();

router.post('/register', upload.single('profileImage'), registerUser);
router.get('/all', getUsers);

export default router;
