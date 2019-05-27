var express = require('express');
var router = express.Router();
var userController = require('./../controllers/user.js');
var authController = require('./../controllers/auth.js');
var authMiddleware = require('./../middlewares/auth.js');
var logoutcontroller = require('./../controllers/outlogin.js');
var clueController = require('./../controllers/clue.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/admin/login', authController.renderLogin);
router.get('/admin/user', authMiddleware.mustLogin, authMiddleware.mustRoot, userController.show);
router.get('/admin/user/create', authMiddleware.mustLogin, authMiddleware.mustRoot, userController.renderUserCreate);
router.get('/admin/user/:id/edit', authMiddleware.mustLogin, authMiddleware.mustRoot, userController.edit);
router.get('/admin/clue',authMiddleware.mustLogin, clueController.show);
router.get('/admin/clue/:id', authMiddleware.mustLogin,clueController.log);
router.get('/admin/outlogin',logoutcontroller.outlogin);

module.exports = router;

