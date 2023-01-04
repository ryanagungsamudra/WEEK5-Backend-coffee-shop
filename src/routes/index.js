const express = require('express');
const router = express();
const productRoute = require('./product.route')
const usersRoute = require('./users.route')

router.get('/', (req, res) => {
    return res.send('Backend for yannn coffee shop')
})
router.use('/products', productRoute)
router.use('/users', usersRoute)

module.exports = router;