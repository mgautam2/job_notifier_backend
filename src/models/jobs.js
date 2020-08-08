const mongoose = require('mongoose');
const validator = require('validator')

const jobSchema = new mongoose.Schema({
  day : {
    required : true,
    type : Number
  },
  month : {
    required : true,
    type : String
  },
  Date : {
    required : true,
    type : Date,
    validate (value) {
      if (value <= Date.now())
        throw new Error("Don't live in the past Man!!")
    }
  },
  description : {
    required: true,
    trim : true, 
    type : String
  }
})

const Jobs = mongoose.model('Jobs', jobSchema)

module.exports = Jobs