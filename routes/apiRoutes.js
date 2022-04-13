const express = require('express');
const {getUser, addUser, oneUser} = require('../controllers/loginController')
const { subjectsPage, addSubject, modifySubject, deleteSubject, oneSubject } = require('../controllers/subjectsController');
const { priceValidator, propertyValidator, idValidator, profesorValidator, descriptionValidator } = require('../middlewares/subjectsMiddlewares');
const router = express.Router();

//Pag principal
router.get('/', (req,res)=>{res.send('hola, esta es la pagina principal')});

//logIn
router.get('/login', getUser);
router.get('/login/:id', oneUser);
router.post('/login', addUser);
router.put('/login');
router.delete('/login');

//Profesores/materias
router.get('/profesores/materias', subjectsPage);
router.get('/profesores/materias/:id', idValidator, oneSubject);
router.post('/profesores/materias', priceValidator, propertyValidator, descriptionValidator, profesorValidator, addSubject);
router.put('/profesores/materias/:id', priceValidator, propertyValidator, descriptionValidator, profesorValidator, modifySubject);
router.delete('/profesores/materias/:id', deleteSubject);


module.exports = router
