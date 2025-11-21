import {NextFunction,Request ,Response } from "express";
import jwt from "jsonwebtoken";
import {JWT_SECRET} from "./config";

export function middleware(req:Request,res:Response,next:NextFunction){

const token=req.headers("authorizations")??"";
const decoded=jwt.verify(token,JWT_SECRET);

if(decoded){
    req.userId=decoded.userId;
    next();
}else{
    res.status(403).json({
        message:"unauthorize"
    })
}

}

