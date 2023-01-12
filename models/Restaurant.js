const { Int32 } = require('mongodb')
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
    type: Number,
    required: true,
  },
  comments: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    require: true,
  },
})

module.exports = mongoose.model('Restaurant', RestaurantSchema)