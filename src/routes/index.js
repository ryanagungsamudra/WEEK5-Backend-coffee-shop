const express = require('express');
const router = express();
const productRoute = require('./product.route')
// const productDetailRoute = require('./product-detail.route')

router.get('/', (req, res) => {
    return res.send('Backend for yannn coffee shop')
})
router.use('/products', productRoute)
// router.use('/products-detail', productDetailRoute)

module.exports = router;