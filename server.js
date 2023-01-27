const express = require('express');
const connectDB = require('./config/database');
const app = express();
const homeRoutes = require('./routes/home')
const restaurantRoutes = require('./routes/restaurant')
const authRoutes = require('./routes/auth')

require('dotenv').config({path: './config/.env'})

connectDB()


app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.use('/',homeRoutes)
app.use('/login',authRoutes)
app.use('/restaurant',restaurantRoutes)

app.listen(process.env.PORT, () =>{
    console.log(`server is running`)
})



    
