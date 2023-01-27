const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')
const authController = require('../controllers/auth')

router.get('/',homeController.getIndex)
router.get('/login',authController.getLoginIndex)
router.get('/signUp',authController.getSignUpIndex)
router.post('/signUp',authController.postSignUp)

module.exports = router