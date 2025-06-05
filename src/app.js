require('dotenv').config();             // Carga variables de entorno
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes'); // Importa rutas

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Ruta base de la API
app.use('/api', routes);

module.exports = app;
