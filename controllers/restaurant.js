const RestaurantsSchema = require("../models/RestaurantsSchema")

module.exports = {
    getIndex: async (req,res) =>{
        try{
            const restaurantList = await RestaurantsSchema.find()
            res.render('restaurants.ejs',{restaurants: restaurantList})
        }catch(err){
            console.log(err)
        }
    }
}