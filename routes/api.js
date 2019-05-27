var express = require('express');
var router = express.Router();
var userController = require('./../controllers/user');
var authController = require('./../controllers/auth.js');
var clueController = require('./../controllers/clue');

router.post('/user' , userController.insert);
router.delete('/user' , userController.delete);
router.put('/user/:id' , userController.update);
router.post('/login' , authController.login);
router.post('/clue' , clueController.insert);
router.put('/clue/:id' , clueController.update);
router.post('/clue/:id/log', clueController.addLog);

module.exports = router;
