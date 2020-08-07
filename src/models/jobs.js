const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  day : {
    required : true,
    type : String
  },
  Date : {
    required : true,
    type : Date
  },
  description : {
    required: true,
    trim : true, 
    type : String
  }
})

const Jobs = mongoose.model('Jobs', jobSchema)

module.exports = Jobs