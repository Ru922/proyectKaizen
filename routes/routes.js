const express = require('express');
const { subjectsPage, addSubject, modifySubject, deleteSubject, oneSubject } = require('../controllers/routesController');
const router = express.Router();

router.get('/profesores/materias',subjectsPage);
router.get('/profesores/materias/:id',oneSubject);
router.post('/profesores/materias',addSubject);
router.put('/profesores/materias/:id', modifySubject);
router.delete('/profesores/materias/:id', deleteSubject);


module.exports = router
