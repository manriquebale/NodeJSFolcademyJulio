import { model, models, Schema } from 'mongoose'
import bcrypt from 'bcrypt'
import IUser from './user.interface'

const UserSchema = new Schema<IUser>({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'El email es obligatorio y único'],
        lowercase: true,
        trim: true
    },
    contraseña: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    edad: Number,
    direccion:String,
    telefono: String,
},{
        timestamps: { createdAt: true, updatedAt: true }
})

UserSchema.methods.guardarContraseña = async function guardarContraseña(): Promise<boolean> {
    const user = this as any;
    const salt = await bcrypt.genSalt(10);
    user.contraseña = await bcrypt.hash(user.contraseña, salt);
    return true;
};

UserSchema.methods.validarContraseña = function validarContraseña(
    contraseña: string,
  ): Promise<boolean> {
    return bcrypt.compare(contraseña, (this as any).contraseña);
  };

export default model<IUser>('User', UserSchema)