const express = require('express');
const connectDB = require('./config/database');
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('express-flash')
const app = express();
const homeRoutes = require('./routes/home')
const restaurantRoutes = require('./routes/restaurant')
const pollRoutes = require('./routes/poll')

require('dotenv').config({path: './config/.env'})

require('./config/passport')(passport)

connectDB()


app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  )
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

app.use('/',homeRoutes)
app.use('/restaurant',restaurantRoutes)
app.use('/poll', pollRoutes)

app.listen(process.env.PORT, () =>{
    console.log(`server is running`)
})



    
