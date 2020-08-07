const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const jobs_route = require('./src/routes/jobs');

const app = express();

const port = process.env.PORT 
 
mongoose.connect(process.env.MONGO_CONNECTION, {
   useNewUrlParser: true,
   useCreateIndex: true,
   useFindAndModify: false,
   useUnifiedTopology: true 
})

app.use(express.urlencoded({ extended: true }));

app.use(express.json())

app.use(jobs_route)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})