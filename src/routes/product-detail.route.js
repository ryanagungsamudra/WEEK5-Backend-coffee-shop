const express = require('express');
const router = express();
const validation = require('../../src/middlewares/validationProductDetail')

// import controller
const productDetailController = require('../controllers/product-detail.controller')

router.get('/', productDetailController.read)
router.get('/:id', productDetailController.readDetail)
router.post('/', validation, productDetailController.create)
router.put('/', productDetailController.update)
router.patch('/:id', productDetailController.update)
router.delete('/:id', productDetailController.remove)
// jangan pakai delete karna bisa bentrok dengan method delete built in

module.exports = router