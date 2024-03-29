const express = require('express')
const router = express.Router()
const pollController = require('../controllers/poll')

router.get('/:userId', pollController.getPoll)

router.put('/increaseVote', pollController.increaseVote)

router.put('/decreaseVote', pollController.decreaseVote)

router.put('/resetVote', pollController.resetVote)

module.exports = router