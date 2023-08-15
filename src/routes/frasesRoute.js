const express = require('express');
const router = express.Router();
const controller = require('../controllers/fraseController');

router.get('/frase/get/all', controller.getAll);
router.get('/frase/get/:id', controller.getByID);
router.put('/frase/update/:id',controller.updateFrase);
router.post('/frase/add', controller.postAll);
router.delete('/frase/delete/:id', controller.deleteFrase);

module.exports = router;