import User from '../user/user.model'
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const authMiddleware = async (req:Request, res:Response, next:NextFunction) => {
  try {
    if (!req.headers.authorization) return next(res.status(401).json({
        message: 'Missing header authorization'
    }));

    req.token = req.headers.authorization.split(' ')[1];
    console.log(req.token)
    const decoded = jwt.verify(req.token, process.env.JWT_SECRET || '') as any;
    console.log(decoded)
    if (!decoded) return next(res.status(401).json({
        message: 'Unauthorized'
    }));

    const user = await User.findOne({ id: (decoded as any).sub });
    if(user === null) return next(res.status(404).json({
        message: 'Not found'
    })) 
    req.user = user;
    next();
  } catch (error) { return next(error); }
};
