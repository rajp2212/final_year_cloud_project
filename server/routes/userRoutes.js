import express from 'express';
import { signinuser,signupuser } from '../controllers/userAction.js';

const router=express.Router();

router.post('/signinuser',signinuser); 
router.post('/signupuser',signupuser); 


export default router;