const express= require('express');
const router= express.Router();
const productModule= require('../Modules/productModule');


router.post('/singlecheck',productModule.singlecheck);

module.exports= router;