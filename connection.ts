const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true }, (err: any) => {
    if (err) {
        console.log('Hubo un error en la conexión')
    } else {
        console.log('Conectado a la base de datos')
    }
});

export default mongoose.connection