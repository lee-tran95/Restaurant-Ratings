const { response } = require('express');
const express = require('express')
const app = express();
const MongoClient = require('mongodb').MongoClient
const PORT = 8000
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended : true}))
app.use(express.json())
require('dotenv').config();

app.listen(process.env.PORT || PORT, () =>{
    console.log(`server is running on ${PORT}`)
})

let db,
    dbConnectionStr = process.env.DB_STRING
    dbName = 'restaurants'

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    })

    app.get('/',(req,res)=>{
        db.collection(dbName).find().toArray()
        .then(data =>{
            res.render('index.ejs', {restaurants : data})
        })
        .catch(error => console.log(error))
    })

    app.post('/addRestaurant',(req,res) =>{
        db.collection(dbName).countDocuments({name: req.body.name})
        .then(result =>{
            if(result === 0){
                db.collection(dbName).insertOne(req.body)
                .then(result =>{
                    console.log('Restaurant added')
                    res.redirect('/')
                })
            }else{
                res.redirect('/');
            }
        })
    })

    app.put('/increaseRating',(req,res) =>{
        db.collection(dbName).updateOne({name: req.body.restaurantNameS, rating: req.body.ratingS},{
            $set: {
                rating: String(Math.min(Number(req.body.ratingS) + 1, 5))
            }
        },{
            upsert:false
        })
        .then(result =>{
            console.log('rating updated!')
            res.json('info updated')
        })
        .catch(error => console.log(error))
    })

    app.put('/decreaseRating',(req,res)=>{
        db.collection(dbName).updateOne({name: req.body.restaurantNameS, rating: req.body.ratingS},{
            $set:{
                rating: String(Math.max(Number(req.body.ratingS) - 1, 1))
            }
        },{
            upsert:false
        })
        .then(result =>{
            console.log('rating updated!')
            res.json('rating decreased')
        })
        .catch(error => console.log(error))
    })

    app.delete('/deleteRestaurant',(req,res)=>{
        db.collection(dbName).deleteOne({name: req.body.restaurantNameS, rating: req.body.ratingS})
        .then(result =>{
            console.log('Restaurant deleted')
            res.json('Restaurant deleted')
        })
        .catch(error => console.log(error))
    })

    
