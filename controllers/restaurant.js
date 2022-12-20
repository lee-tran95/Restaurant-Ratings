const Restaurant = require("../models/Restaurant")

module.exports = {
    getIndex: async (req,res) =>{
        try{
            const restaurantList = await Restaurant.find()
            res.render('restaurants.ejs',{restaurants: restaurantList})
        }catch(err){
            console.log(err)
        }
    },
    addRestaurant: async (req,res) =>{
        try{
            await Restaurant.create({
                restaurantName: req.body.restaurantname, 
                comments: req.body.comments, 
                ratings: req.body.rating,
                votes: '1'
            })
            console.log('restaurant added')
            res.redirect('/restaurant')
        }catch(err){
            console.log(err)
        }
    },
    deleteRestaurant: async (req,res) =>{
        try{
            await Restaurant.findOneAndDelete({_id:req.body._restaurantId})
            console.log('Deleted Restaurant')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    },
    increaseVote: async(req,res) =>{
        try{
            await Restaurant.findOneAndUpdate({_id:req.body._restaurantId},{
                $inc: {votes: 1}
            })
            console.log('Vote increased')
            res.json('Vote increased')
        }catch(err){
            console.log(err)
        }
    },
    decreaseVote: async(req,res) =>{
        try{
            await Restaurant.findOneAndUpdate({_id:req.body._restaurantId, votes:{$gt: 1}},{
                $inc: {votes: -1}
            })
            console.log('Vote decreased')
            res.json('Vote decreased')
        }catch(err){
            console.log(err)
        }
    }
}