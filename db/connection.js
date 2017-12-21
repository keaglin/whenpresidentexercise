const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/whenpresident', 
  { useMongoClient: true })

mongoose.Promise = Promise

module.exports = mongoose
// exporting connected mongoose

// const seedData = require('./seeds.json')

// module.exports = {
//   candidates: seedData
// }
