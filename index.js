const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');

//Crear servidor de express
const app = express();

//base de datos
dbConnection();

//CORS
app.use(cors());

//Directorio Público
app.use(express.static('public'));

//lectura y parseo del body
app.use(express.json());

//rutas
//TODO: auth// crear rutas, login, renew
app.use('/api/auth', require('./routes/auth'));
//TODO:CRUD: Eventos
app.use('/api/events', require('./routes/events'));

//escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
});
