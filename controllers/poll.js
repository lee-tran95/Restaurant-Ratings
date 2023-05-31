const Restaurant = require("../models/Restaurant")
module.exports = {
    getPoll: async(req,res) =>{
        try{
            const restaurantList = await Restaurant.find({userId: req.params.userId})
            res.render('poll.ejs', {restaurants: restaurantList})
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
    },
    resetVote: async(req,res) =>{
        try{
            await Restaurant.updateMany({userId: req.body._userId}, {
                $set: {votes: 1}
            })
            console.log('Votes resetted')
            res.json('Votes resetted')
        }catch(err){
            console.log(err)
        }
    }
}