const mongoose = require('mongoose')

const RestaurantSchema = new mongoose.Schema({
  restaurantName: {
    type: String,
    required: true,
  },
  ratings: {
    type: String,
    required: true,
  },
  votes: {
    type: String,
    required: false,
  },
  comments: {
    type: String,
    required: true,
  }
})

module.exports = mongoose.model('Restaurant', RestaurantSchema)