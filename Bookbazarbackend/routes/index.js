const express = require('express');
const router = express.Router();

const cartroute=require('./cart');
router.use('/cart', cartroute);
module.exports = router;