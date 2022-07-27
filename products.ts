

// //SCHEMA
// const ProductosSchema = new mongoose.Schema({
//     nombre: {
//         type: String,
//         require:true
//     },
//     precio: {
//         type: Number,
//     },
//     stock: {
//         type: Number,
//         default: 0
//     }
// })

// //MODEL 
// const productosModel = new mongoose.model('productos', ProductosSchema)


// const buscar = async () => {
//     const AllProductos = await productosModel.find()
//     return AllProductos
// }

// // Definimos una ruta y su handler correspondiente
// app.get('/', function (request, response) {
//     response.send('¡Bienvenidos a Express!')
// })

// //get de productos
// app.get('/productos/', async (request, response) =>{    
//   const prods = await productosModel.find().sort({nombre: request.query.orderBy})
//   console.log(request.query)
//   response.json({prods})
//   }
// )

// app.get('/productos/:id',  param('id', 'No es objectId').isMongoId(), validateFields, async (request, response) =>{  
      
//     const prods = await productosModel.find({_id: request.params.id})
//     console.log(request.params)
//     response.json({prods})
//     }
//   )

// //agregar un producto
// app.post('/productos',function(request, response) {
//   response.send('agregar un producto')
// })

// //eliminar un producto
// app.delete('/productos',function(request, response) {
//     response.send('eliminar un producto') 
// })