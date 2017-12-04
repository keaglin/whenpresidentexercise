const express       = require('express')
const db            = require('../db/connection')

const router        = express.Router()


router.get('/', (req, res) => {
  res.render('candidates-index', {
    candidates: db.candidates
  })
})

router.get('/:name', (req, res) => {
  var desiredName = req.params.name
  var candidateOutput

  db.candidates.forEach((candidate) => {
    if(desiredName === candidate.name){
      candidateOutput = candidate
    }
  })

  res.render('candidates-show', {
    candidate: candidateOutput
  })
})


module.exports = router
