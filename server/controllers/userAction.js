import User from "../models/userRegister.js";
import express from 'express';
import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';

const router = express.Router();

export const signinuser=async (req,res)=>{
    const {email,password}=req.body;

    try { 
        const existingUser=await User.findOne({email});
        
        if(!existingUser){
            return res.status(404).json({message:"User doesn't exist"});
        }

        const checkpass=await bcrypt.compare(password,existingUser.password);

        if(!checkpass){
            return res.status(400).json({message:"Invalid credentials"});
        }

        const token=jwt.sign({email: existingUser.email, id:existingUser._id},"test",{expiresIn:"1h"});

        res.status(200).json({result:existingUser,token});


    } catch (error) {
        res.status(500).json({message:"Something went wrong"})
    }


}
export const signupuser=async (req,res)=>{
    const {email,password,firstName,lastName}=req.body;

    try { 
        const existingUser=await User.findOne({email});
        
        if(existingUser){
            return res.status(404).json({message:"User already exist"});
        }

        const hashedPassword= await bcrypt.hash(password,12);

        const result= await User.create({email,password:hashedPassword,name:`${firstName} ${lastName}`});

        const token=jwt.sign({email, id:result._id},"test",{expiresIn:"1h"});

        res.status(200).json({result,token});


    } catch (error) {
        res.status(500).json({message:"Something went wrong"})
    }


}

/* export const getPosts=async(req,res)=>{
    try {
        const userInfo=await UserRegister.find();

        res.status(200).json(userInfo);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
} */




/* export default router; */


