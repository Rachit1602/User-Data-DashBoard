import express from 'express';
import {userDataViewController,login,register} from '../controllers/adminController.js';
import { authenticateToken } from '../middlewares/authenticate.js';

const router=express.Router();

router.get('/submissions',authenticateToken,userDataViewController);
router.post('/register',register);
router.post('/login',login);

export default router;