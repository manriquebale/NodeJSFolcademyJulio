const mongoose = require('mongoose');

const DB_URI = 'mongodb://localhost:27017/test'
mongoose.connect(DB_URI, { useNewUrlParser: true }, (err: any) => {
    if (err) {
        console.log('Hubo un error en la conexión')
    } else {
        console.log('Conectado a la base de datos')
    }
});

export default mongoose.connection