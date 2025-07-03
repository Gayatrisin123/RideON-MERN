const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const userController = require('../controllers/user.controller');
router.post('/register', [
    body('fullname.firstname').isLength({min: 3}).withMessage('First name should contain at least three characters'),    

    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min: 6}).withMessage('Password should contain at least six characters'),
   

],
userController.registerUSer);
module.exports = router;