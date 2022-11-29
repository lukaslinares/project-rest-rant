// DEPENDENCIES
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) })

//MIDDLEWARE
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//CONTROLLERS & ROUTES
app.get('/', (req, res) => {
    res.render('home')
})

//PLACES
app.use('/places', require('./controllers/places'))


//404 PAGE
app.get('*', (req, res) => {
    res.render('error404')
})

// LISTEN
app.listen(PORT, () => {
    console.log('listening on port', PORT);
  })

  module.exports = app;

