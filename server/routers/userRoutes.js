const router = require('express').Router();
const {
    getUsersController,
    postUsersController,
    userPostLogInController,
    userLogoutController,
    authorize
} = require('../controllers/userControllers');

const {
    emailValidation,
    passValidation,
    confirmPassVal,
} = require('../validation')

router.route('/')
.get(getUsersController)

router.route('/register')
.post(
    emailValidation,
    passValidation,
    confirmPassVal,
    postUsersController)

router.route('/login')
.post(userPostLogInController)

router.route('/logout')
.post(userLogoutController)

module.exports = router;