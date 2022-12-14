const express= require('express');
const router= express.Router();
const registerModule = require('../Modules/registerModule');

//singup Router
router.post('/signup', registerModule.signup);

//signin Router
router.post('/signin', registerModule.signin);

//forgotpassword router
router.post('/forgotpassword', registerModule.forgotpassword);

//reset Routers
router.get('/resetpassword/:id/:token',registerModule.resetpassword);

router.post('/resetpassword/:id/:token',registerModule.resetpasswordpost);

module.exports= router;