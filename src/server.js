const express = require('express');
const jobs_route = require('./routes/jobs')

const app = express();

const port = process.env.PORT || 4000

 
app.use(express.json())

app.use(jobs_route)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})