const Restaurant = require("../models/Restaurant")

module.exports = {
    getIndex: (req,res) =>{
        res.render('index.ejs')
    },
    getPoll: async(req,res) =>{
        try{
            const restaurantList = await Restaurant.find({userId: req.params.userId})
            res.render('poll.ejs', {restaurants: restaurantList})
        }catch(err){
            console.log(err)
        }
    },
}