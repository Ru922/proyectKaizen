const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const routes = require('./routes/apiRoutes');
const cors = require('cors');

require('dotenv').config();
require('./database/db');
require('./database/models/user');

const app = express();
app.use(cors());

//middlewares
app.use(express.json())
app.use(express.static(__dirname + '/public'))
app.use('/', routes)
app.use(morgan('tiny'))


const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log (`Escuchando desde el puerto ${PORT}`));