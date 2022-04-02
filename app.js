const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;


app.use(express.static('public'))
app.get('/', (req,res) => {
    res.send('Pagina de inicio')
});

app.get('/', (req,res) => {
    res.send('Pagina de inicio')
});

app.listen(PORT, () => console.log ('Escuchando desde el puerto 3000'));