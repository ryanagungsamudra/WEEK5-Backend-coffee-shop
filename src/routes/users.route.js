const express = require('express');
const router = express();
const { body, validationResult } = require('express-validator');

// import controller
const usersController = require('../controllers/users.controller')

router.get('/', usersController.read)
router.get('/:id', usersController.readDetail)
router.post('/', [
    body('email').trim().isEmail().withMessage('Email must be a valid email').normalizeEmail().toLowerCase(),
    body('password').trim().isLength(2).withMessage('Password length too short, min 2 char required')
], usersController.create)
router.put('/', usersController.update)
router.patch('/:id', usersController.update)
router.delete('/:id', usersController.remove)
// jangan pakai delete karna bisa bentrok dengan method delete built in

module.exports = router