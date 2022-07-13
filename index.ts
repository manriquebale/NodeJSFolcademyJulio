
import express from 'express'
import * as productos from './productos'

const app = express()

const mongoose = require('mongoose');

const DB_URI = 'mongodb://localhost:27017/test'
mongoose.connect(DB_URI, { useNewUrlParser: true }, (err: any) => {
    if (err) {
        console.log('Hubo un error en la conexión')
    } else {
        console.log('Conectado a la base de datos')
    }
});

//SCHEMA
const ProductosSchema = new mongoose.Schema({
    nombre: {
        type: String,
        require:true
    },
    precio: {
        type: Number,
    },
    stock: {
        type: Number,
        default: 0
    }
})

//MODEL 
const productosModel = new mongoose.model('productos', ProductosSchema)

productosModel.create({
    nombre: 'Producto 3',
    precio: 200,
    stock: 5000
})  

const buscar = async () => {
    const AllProductos = await productosModel.find()
    return AllProductos
}


// Definimos una ruta y su handler correspondiente
app.get('/', function (request, response) {
    response.send('¡Bienvenidos a Express!')
})

//get de productos
app.get('/productos',function(request, response) {
  buscar().then(productos => {
    console.log(productos)
    response.send(productos)
  }
)
})

//agregar un producto
app.post('/productos',function(request, response) {
  response.send('agregar un producto')
})

//eliminar un producto
app.delete('/productos',function(request, response) {
    response.send('eliminar un producto') 
})

// Ponemos a escuchar correr nuestra app de express
app.listen(3000, function () {
    console.info('Servidor escuchando en http://localhost:3000') })

