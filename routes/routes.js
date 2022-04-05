const express = require('express');
const { subjectsPage, addSubject, modifySubject, deleteSubject, oneSubject } = require('../controllers/routesController');
const { priceValidator, propertyValidator, idValidator } = require('../middlewares/subjectsMiddlewares');
const router = express.Router();

router.get('/', (req,res)=>{res.send('hola, esta es la pagina principal')})
router.get('/profesores/materias',subjectsPage);
router.get('/profesores/materias/:id',oneSubject);
router.post('/profesores/materias', priceValidator, propertyValidator, idValidator, addSubject);
router.put('/profesores/materias/:id', modifySubject);
router.delete('/profesores/materias/:id', deleteSubject);


module.exports = router
