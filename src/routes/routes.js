const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

//Rutas de Vistas

router.get('/', controller.home);
router.get('/form', controller.forms);
router.get('/favorites', controller.favoritos);

module.exports = router;