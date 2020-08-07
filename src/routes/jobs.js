const express = require('express');

const Jobs = require ('../models/jobs.js')
const jobScheduler = require("../helper/dailyJobScheduler.js");

const router = new express.Router();


router.get('/jobs/start', async (req, res) => {
  
  jobScheduler()
  
  res.send();
  
})


router.post('/jobs', async (req, res) => {
  const job = new Jobs(req.body)
  try {
    await job.save()
    res.send("Maa chodunga teri mai");
  }
  catch(e){
    res.status(404).send(e)
  }
})




module.exports = router;

