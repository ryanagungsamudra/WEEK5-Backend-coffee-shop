const { check, validationResult } = require('express-validator')

// USERS VALIDATION
const rulesUsers = [
    check('email')
        .notEmpty().withMessage('email cannot empty')
        .trim()
        .escape(),

    check('password')
        .notEmpty().withMessage('password cannot empty')
        .isNumeric().withMessage('password must be a numeric')
        .trim()
        .escape(),

    check('mobile_number')
        .notEmpty().withMessage('mobile number cannot empty')
        .isNumeric().withMessage('mobile number must be a numeric')
        .trim()
        .escape(),

    check('name')
        .notEmpty().withMessage('name cannot empty')
        .trim()
        .escape(),

    check('gender')
        .notEmpty().withMessage('gender cannot empty')
        .trim()
        .escape(),

    check('birthdate')
        .notEmpty().withMessage('birthdate cannot empty')
        .trim()
        .escape(),

    check('address')
        .notEmpty().withMessage('address cannot empty')
        .trim()
        .escape(),
]
// RESPONSE AND CONDITION
const validation = [
    //Rules
    rulesUsers,

    //Response
    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array()[0].msg })
        }
        next();
    }
]

module.exports = validation