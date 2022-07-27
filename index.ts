
import express from 'express'
require("./connection")
const { mongoose } = require("mongoose");
//importar dotenv
import dotenv from 'dotenv';
dotenv.config();

const app = express()
app.use(express.json());

//importar nuevas rutqass de users y auth
var userRoutes = require('./user/user.routes');
app.use('/users', userRoutes);

var authRoutes = require('./auth/auth.routes');
app.use('/auth', authRoutes);

// Ponemos a escuchar correr nuestra app de express
app.listen(3000, function () {
    console.info('Servidor escuchando en http://localhost:3000') })

