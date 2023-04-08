const express = require('express')
const router = express.Router()
const restaurantController = require('../controllers/restaurant')

router.get('/', restaurantController.getIndex)

router.post('/addRestaurant', restaurantController.addRestaurant)

router.delete('/deleteRestaurant', restaurantController.deleteRestaurant)

router.put('/increaseVote', restaurantController.increaseVote)

router.put('/decreaseVote', restaurantController.decreaseVote)

router.get('/createLink', restaurantController.createLink)

module.exports = router