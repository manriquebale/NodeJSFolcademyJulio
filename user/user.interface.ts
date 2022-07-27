import { Document } from 'mongoose'

export default interface IUser extends Document {
    nombre: string
    email: string
    contraseña: string
    edad: number
    direccion: string
    telefono: string
    validarContraseña(contraseña: string): Promise<boolean>
    guardarContraseña(): Promise<boolean>
}