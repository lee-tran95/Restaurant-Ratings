const express = require('express')
const app = express();
const PORT = 8000;
const MongoClient = require('mongodb').MongoClient
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.listen(process.env.PORT || PORT, () =>{
    console.log(`server is running on ${PORT}`)
})

let db,
    dbConnectionStr = 'mongodb+srv://leelu:Restaurantrating2@cluster0.7re0qu7.mongodb.net/?retryWrites=true&w=majority',
    dbName = 'restaurants'

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    })

    app.get('/',(req,response)=>{
        db.collection(dbName).find().toArray()
        .then(data =>{
            response.render('index.ejs', {info : data})
        })
        .catch(error => console.log(error))
    })
