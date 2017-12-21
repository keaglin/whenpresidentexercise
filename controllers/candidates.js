const express       = require('express')
const Candidate     = require('../db/schema')
const router        = express.Router()
// const db            = require('../db/connection')


router.get('/', (req, res) => {
  Candidate.find({})
    .then((candidates) => {
      res.render('candidates-index', {
        candidates: candidates
      })
    })
    // original implementation
  // res.render('candidates-index', {
  //   candidates: db.candidates
  // })
})

router.get('/:name', (req, res) => {
  var name = req.params.name
  Candidate.findOne({ name: name })
  // filter based on the name attribute, as defined in Schema
  // use the name variable that we defined to get the one president
  // we want
  .then(candidate => {
    res.render('candidates-show', { candidate: candidate })
  })
})

router.post('/', (req, res) => {
  Candidate.create(req.body.candidate)
    .then(candidate => {
      res.redirect(`/candidates/${candidate.name}`)
    })
})

router.put('/:name', (req, res) => {
  Candidate.findOneAndUpdate({ name: req.params.name }, req.body.candidate, { new: true })
  .then(candidate => {
    res.redirect(`/candidates/${candidate.name}`)
  })
})

router.delete('/:name', (req, res) => {
  Candidate.findOneAndRemove({ name: req.params.name })
  .then(candidate => {
    res.redirect('/candidates')
  })
})

module.exports = router
