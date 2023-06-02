const Restaurant = require("../models/Restaurant")
const passport = require('passport')

module.exports = {
    getIndex: async (req,res) =>{
        try{
            if(!req.isAuthenticated()){
                res.redirect('/login')
            }else{
                const restaurantList = await Restaurant.find({userId: req.user.id})
                res.render('restaurants.ejs',{restaurants: restaurantList})
            }
        }catch(err){
            console.log(err)
        }
    },
    addRestaurant: async (req,res) =>{
        try{
            if(!req.isAuthenticated()){
                res.redirect('/login')
            }else{
                await Restaurant.create({
                    userId: req.user.id,
                    restaurantName: req.body.restaurantname, 
                    comments: req.body.comments, 
                    ratings: req.body.rating,
                    votes: '0'
                })
                console.log('restaurant added')
                res.redirect('/restaurant')
            }
        }catch(err){
            console.log(err)
        }
    },
    deleteRestaurant: async (req,res) =>{
        try{
            if(!req.isAuthenticated()){
                res.redirect('/login')
            }
            else{
                await Restaurant.findOneAndDelete({_id:req.body._restaurantId})
                console.log('Deleted Restaurant')
                res.json('Deleted It')
            }
        }catch(err){
            console.log(err)
        }
    },
    createLink: async(req,res) =>{
        try{
            if(!req.isAuthenticated()){
                res.redirect('/login')
            }
            else{
                const userId = req.user.id
                res.redirect(`/poll/${userId}`)
            }
        }catch(err){
            console.log(err)
        }
    }
}