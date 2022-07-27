import { Request, Response, NextFunction } from 'express';
import User from '../user/user.model'
import IUser from '../user/user.interface';
import jwt from 'jsonwebtoken';

export const signup = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { nombre, email, telefono, edad, direccion, contraseña } = req.body;
        let user: IUser = new User({
            nombre,
            email,
            telefono,
            edad,
            direccion,
            contraseña,
        });
        if (await user.guardarContraseña() === false) {
           return res.status(400).json({
                message: 'Error al guardar la contraseña'
            });
        }
        console.log(user)
        await user.save();
        return res.json(user);
    } catch (err) { return next(err); }   
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        
        if (!user || !user.contraseña) return res.status(401).json({
            message: 'Unauthorized'
        });
        
        const correctPassword = await user.validarContraseña(req.body.contraseña);
        if (!correctPassword)
        return res.status(401).json({
            message: 'Invalid data'
        });
 
        // Create a Token
        const token: string = jwt.sign({ sub: user._id }, process.env.JWT_SECRET || '', {
            expiresIn: process.env.JWT_EXPIRATION,
        });
        console.log(token)
        return res.header('auth-token', token).json({ user, token });
    } catch (error) { return next(error); }
}