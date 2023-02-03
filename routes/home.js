const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')
const authController = require('../controllers/auth')

router.get('/',homeController.getIndex)
router.get('/login',authController.getLoginIndex)
router.post('/login', authController.postLogin)
router.get('/signup',authController.getSignUpIndex)
router.post('/signup',authController.postSignUp)

module.exports = router