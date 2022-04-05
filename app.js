const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const routes = require('./routes/routes');

require('dotenv').config();
require('./database/db');

morgan('tiny')

const app = express();

app.use(express.json())
app.use(express.static(__dirname + '/public'))
app.use('/', routes)




const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log (`Escuchando desde el puerto ${PORT}`));