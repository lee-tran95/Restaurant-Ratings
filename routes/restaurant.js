const express = require('express')
const router = express.Router()
const restaurantController = require('../controllers/restaurant')

router.get('/', restaurantController.getIndex)

router.post('/addRestaurant', restaurantController.addRestaurant)

module.exports = router