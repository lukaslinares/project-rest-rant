const router = require('express').Router()
const db = require('../models')
const Places = require('../models/places.js')
// const seedPlace = require('../seeders/seed-places.js')

//Index +
router.get('/', (req, res) => {
    Places.find()
    .then((places) => {
      res.render('places/index', { places })
    })
    .catch(err => {
      console.log(err) 
      res.render('error404')
    })
})

//CREATE PLACE +
router.post('/', (req, res) => {
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  Places.create(req.body)
  .then(() => {
      res.redirect('/places')
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

//NEW PLACE +
router.get('/new', (req, res) => {
  res.render('places/new')
})

//SHOW +
router.get('/:id', (req, res) => {
  Places.findById(req.params.id)
  .populate('comments')
  .then(place => {
      console.log(place.comments)
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

//UPDATE +
router.put('/:id', (req, res) => {
  Places.findByIdAndUpdate(req.params.id, req.body)
  .then(() => {
      res.redirect(`/places/${req.params.id}`)
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

//DELETE PLACES +
router.delete('/:id', (req, res) => {
  Places.findByIdAndDelete(req.params.id)
    .then(place => {
      res.redirect('/places')
    })
    .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

//EDIT PLACE +
router.get('/:id/edit', (req, res) => {
  Places.findById(req.params.id)
  .then(place => {
      res.render('places/edit', { place })
  })
  .catch(err => {
      res.render('error404')
  })
})

//CREATE COMMENT
router.post('/:id/comment', (req, res) => {
  console.log(req.body)
  db.Place.findById(req.params.id)
  .then(place => {
      db.Comment.create(req.body)
      .then(comment => {
          place.comments.push(comment.id)
          place.save()
          .then(() => {
              res.redirect(`/places/${req.params.id}`)
          })
      })
      .catch(err => {
          res.render('error404')
      })
  })
  .catch(err => {
    res.render('error404')
  })
})

//DELETE COMMENT
router.delete('/:id/comment/:commentId', (req, res) => {
  db.Comment.findByIdAndDelete(req.params.commentId)
      .then(() => {
          res.redirect(`/places/${req.params.id}`)
      })
      .catch(err => {
          console.log('err', err)
          res.render('error404')
      })
})

//EDIT COMMENT 
// router.get('/:id/comment/edit'), (req, res)

//SEED 
router.get('/data/seed', (req, res) =>{
  Places.insertMany(seedPlace)
    .then(res.redirect('/places'))
})

module.exports = router