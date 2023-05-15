const express = require('express')
const router = express.Router()
const restaurantController = require('../controllers/restaurant')
const authController = require('../controllers/auth')

router.get('/', restaurantController.getIndex)

router.post('/addRestaurant', restaurantController.addRestaurant)

router.delete('/deleteRestaurant', restaurantController.deleteRestaurant)

router.get('/createLink', restaurantController.createLink)

router.post('/logout',authController.logout)

module.exports = router