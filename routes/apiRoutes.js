const express = require('express');
const {getUser, oneUser, addUser, emailUser} = require('../controllers/loginController')
const { subjectsPage, addSubject, modifySubject, deleteSubject, oneSubject } = require('../controllers/subjectsController');
const { priceValidator, propertyValidator, idValidator, profesorValidator, descriptionValidator } = require('../middlewares/subjectsMiddlewares');
const { idValidatorU, propertyValidatorU,emailValidatorU, nameValidatorU, passValidatorU  } = require('../middlewares/loginMiddlewares');
const router = express.Router();

//Pag principal
router.get('/', (req,res)=>{res.send('hola, esta es la pagina principal')});

//logIn
router.get('/login', propertyValidatorU, getUser);
router.get('/login/:email', propertyValidatorU, emailUser);
//router.post('/login/:email', propertyValidatorU, emailUser);
//router.post('/login/:email',propertyValidatorU, emailUser);
router.get('/login/:id', propertyValidatorU, idValidatorU, oneUser);
router.post('/login', propertyValidatorU,emailValidatorU, nameValidatorU, passValidatorU, addUser);
//router.post('/login', propertyValidatorU, nameValidatorU, passValidatorU, addUser);

//Profesores/materias
router.get('/profesores/materias', subjectsPage);
router.get('/profesores/materias/:id', idValidator, oneSubject);
router.post('/profesores/materias', priceValidator, propertyValidator, descriptionValidator, profesorValidator, addSubject);
router.put('/profesores/materias/:id', priceValidator, propertyValidator, descriptionValidator, profesorValidator, modifySubject);
router.delete('/profesores/materias/:id', deleteSubject);



module.exports = router;
