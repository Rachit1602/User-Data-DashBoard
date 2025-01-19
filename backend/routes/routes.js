import express from 'express';
import {userDataController} from '../controllers/userController.js';
import {upload} from '../middlewares/multer.js';
const router=express.Router();
router.post('/submit',upload.array('images',10),userDataController);
export default router;
