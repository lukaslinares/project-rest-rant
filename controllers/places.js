const router = require('express').Router()
const db = require('../models')
const Places = require('../models/places.js')

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

//CREATE +
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

//NEW
router.get('/new', (req, res) => {
  res.render('places/new')
})

//SHOW +
router.get('/:id', (req, res) => {
    Places.findById(req.params.id)
    .then(place => {
        res.render('places/show', { place })
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})

//UPDATE
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

//DELETE PLACES +(?)
router.delete('/:id', (req, res) => {
  Places.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect('/places')
    })
    .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

//EDIT +(?)
router.get('/:id/edit', (req, res) => {
  Places.findById(req.params.id) 
    .then(foundPlace => { 
      res.render('edit', {
        place: foundPlace,
      })
    })
    .catch(err => {
      res.render('error404')
  })
})

//CREATE 
router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

//DELETE
router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router

// const router = require('express').Router()
// const db = require('../models')
// const Places = require('../models/places.js')

// //INDEX
// router.get('/', (req, res) => {
//     db.Place.find()
//     .then((places) => {
//       res.render('places/index', { places })
//     })
//     .catch(err => {
//       console.log(err) 
//       res.render('error404')
//     })
// })

// //SHOW ROUTE 
// router.get('/:id', (req, res) => {
//   db.Place.findById(req.params.id)
//   .then(place => {
//       res.render('places/show', { place })
//   })
//   .catch(err => {
//       console.log('err', err)
//       res.render('error404')
//   })
// })

// //NEW
// router.get('/new', (req, res) => {
//   res.render('places/new')
// })

// //EDIT
// router.get('/:id/edit', (req, res) => {
//   Places.findById(req.params.id) 
//   .then(foundPlace => { 
//     res.render('edit', {
//       bread: foundPlace
//     })
//   })
// })

// //CREATE PLACE
// router.post('/', (req, res) => {
//   if (!req.body.pic) {
//     // Default image if one is not provided
//     req.body.pic = 'http://placekitten.com/400/400'
//   }

//   db.Place.create(req.body)
//   .then(() => {
//       res.redirect('/places')
//   })
//   .catch(err => {
//       console.log('err', err)
//       res.render('error404')
//   })
// })

// //UPDATE
// router.put('/:id', (req, res) => {
//   res.send('PUT /places/:id stub')
// })

// //DELETE PLACE
// router.delete('/:id', (req, res) => {
//   Places.findByIdAndDelete(req.params.id)
//     .then(deletedplaces =>{
//       res.status(303).redirect('/places')
//     })
// })

// //CREATE RANT
// router.post('/:id/rant', (req, res) => {
//   res.send('GET /places/:id/rant stub')
// })

// //DELETE RANT
// router.delete('/:id/rant/:rantId', (req, res) => {
//     res.send('GET /places/:id/rant/:rantId stub')
// })

// module.exports = router