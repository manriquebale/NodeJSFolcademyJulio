// Importamos el paquete express
import express from 'express'
import * as productos from './productos'

// Instanciamos una app de express
const app = express()

// Definimos una ruta y su handler correspondiente
app.get('/', function (request, response) {
    response.send('¡Bienvenidos a Express!')
})

//get de productos
app.get('/productos',function(request, response) {
    response.send(productos.getProductos()) 
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

