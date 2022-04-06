const express = require('express');
const { subjectsPage, addSubject, modifySubject, deleteSubject, oneSubject } = require('../controllers/routesController');
const { priceValidator, propertyValidator, idValidator, profesorValidator, descriptionValidator } = require('../middlewares/subjectsMiddlewares');
const router = express.Router();

router.get('/', (req,res)=>{res.send('hola, esta es la pagina principal')})
router.get('/profesores/materias', subjectsPage);
router.get('/profesores/materias/:id', idValidator, oneSubject);
router.post('/profesores/materias', priceValidator, propertyValidator, descriptionValidator, profesorValidator, addSubject);
router.put('/profesores/materias/:id', priceValidator, propertyValidator, descriptionValidator, profesorValidator, modifySubject);
router.delete('/profesores/materias/:id', deleteSubject);


module.exports = router
