// const { Router } = require('express');
const express = require('express');
const router = express();
const productRoute = require('./product.route')

router.get('/', (req, res) => {
    return res.send('Backend for yannn coffee shop')
})
router.use('/products', productRoute)

module.exports = router;