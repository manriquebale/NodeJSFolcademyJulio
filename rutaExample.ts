import express from 'express'
import { validateFields } from './validate-fields'
const { body } = require('express-validator')
var router = express.Router()

router.get('/', body('nombre', 'El nombre es obligatorio').isString(), validateFields, function(request, response){
    response.send('Ruta de ejmplo')
} )

module.exports = router