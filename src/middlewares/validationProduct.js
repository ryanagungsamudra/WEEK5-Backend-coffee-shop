const {check, validationResult} = require('express-validator')

// PRODUCT VALIDATION
const rulesProduct = [
    check('title')
        .notEmpty().withMessage('The title of product cannot empty')
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

    check('price')
        .notEmpty().withMessage('The price of product cannot empty')
        .isNumeric().withMessage('The price of product must be a numeric')
        .trim()
        .escape(),
]

// RESPONSE AND CONDITION
const validation = [
    //Rules
    rulesProduct, 

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


