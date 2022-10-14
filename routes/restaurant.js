const express = require('express')
const router = express.Router()
const restaurantController = require('../controllers/restaurant')

router.get('/', restaurantController.getIndex)

router.post('/addRestaurant', restaurantController.addRestaurant)

router.delete('/deleteRestaurant', restaurantController.deleteRestaurant)

module.exports = router