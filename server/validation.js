const validator = require('express-validator');

const confirmPass = (value, { req }) => {

    if(value !== req.body.password){
        throw new Error(' password has not been confirmed ( password not equal )!');
    }

    return true;
}

const emailValidation = validator.body('email').isEmail().trim()
.withMessage('email must be an email adress!');
const passValidation = validator.body('password').isLength({ min: 8, max: 16 })
.withMessage('Password must be stronger');
const confirmPassVal = validator.body('confirmPass').custom(confirmPass);


module.exports = {
    emailValidation,
    passValidation,
    confirmPassVal,
};
