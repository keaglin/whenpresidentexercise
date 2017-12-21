const mongoose = require('./connection')
// imports connected mongoose

const CandidateSchema = new mongoose.Schema({
  name: String,
  year: Number
})

// Schema is a mongoose method and we pass in the object that is to be the model for our data
const Candidate = mongoose.model('Candidate', CandidateSchema)

module.exports = Candidate