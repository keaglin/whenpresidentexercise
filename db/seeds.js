const Candidate = require('./schema')

// seeds are for creating dummy data

const seedData = require('./seeds.json')

Candidate.remove({})
  .then(() => {
    return Candidate.collection.insert(seedData)
  })
  .then(() => {
    process.exit()
  })