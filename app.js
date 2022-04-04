const express = require('express');
const mongoose = require('mongoose');

const router = require('./routes/routes');
require('dotenv').config();
require('./database/db');

const app = express();


app.use(express.static('public'))
app.get('/', (req,res) => {
    res.send('Pagina de inicio')
});

app.get('/', (req,res) => {
    res.send('Pagina de inicio')
});
app.get('/profesores/materias', (req,res) => {
    res.send('Agregado de materias')
});

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log (`Escuchando desde el puerto ${PORT}`));