const express = require('express')
const router = express.Router
const authController = require('../controllers/auth')

router.get('/',authController.getIndex)

module.exports = router