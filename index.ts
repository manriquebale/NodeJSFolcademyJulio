
import express from 'express'
import dotenv from 'dotenv';
dotenv.config();
require("./connection")
const { mongoose } = require("mongoose");
//importar dotenv

const app = express()
app.use(express.json());

//importar nuevas rutqass de users y auth
var userRoutes = require('./user/user.routes');
app.use('/users', userRoutes);

var authRoutes = require('./auth/auth.routes');
app.use('/auth', authRoutes);

const port = process.env.PORT as unknown as number || 3000
const host = process.env.HOST || '0.0.0.0'   

// Ponemos a escuchar correr nuestra app de express
app.listen(port, host, () => {
    console.info('Servidor escuchando en http://localhost:' + port) })

