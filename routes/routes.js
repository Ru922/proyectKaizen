const express = require('express');
const { subjectsPage, addSubject } = require('../controllers/routesController');
const router = express.Router();

router.get('/profesores/materias',subjectsPage);
router.post('/profesores/materias',addSubject);


module.exports = router
