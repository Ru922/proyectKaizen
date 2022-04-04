const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.send('Pagina de inicio')
});


router.get('/profesores/materias', (req,res) => {
    res.send('Agregado de materias')
});


module.exports = router
