const {check, validationResult} = require('express-validator')

// PRODUCT DETAIL VALIDATION
const rulesProductDetail = [
    check('title')
        .notEmpty().withMessage('The title of product cannot empty')
        .trim()
        .escape(),

    check('price')
        .notEmpty().withMessage('The price of product cannot empty')
        .isNumeric().withMessage('The price of product must be a numeric')
        .trim()
        .escape(),

    check('img')
        .notEmpty().withMessage('The image of product cannot empty')
        .trim()
        .escape(),

    check('category')
        .notEmpty().withMessage('The category of product cannot empty')
        .trim()
        .escape(),

    check('size')
        .notEmpty().withMessage('The size of product cannot empty')
        .trim()
        .escape(),

    check('quantity')
        .notEmpty().withMessage('The quantity of product cannot empty')
        .trim()
        .escape(),

    check('delivery')
        .notEmpty().withMessage('The delivery of product cannot empty')
        .trim()
        .escape(),

    check('time')
        .notEmpty().withMessage('The time of product cannot empty')
        .trim()
        .escape(),
]
// RESPONSE AND CONDITION
const validation = [
    //Rules
    rulesProductDetail,

    //Response
    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()[0].msg})
        }
        next();
    }
]

module.exports = validation


