const express = require('express');

const Jobs = require ('../models/jobs.js')
const jobScheduler = require("../helper/dailyJobScheduler.js");

const router = new express.Router();


router.get('/jobs/start', async (req, res) => {
  try {
    await jobScheduler(); 
    res.send({msg : "Started"});
  }
  catch (e){
    res.status(400).send({msg : "Error in starting"})
  }
})

router.post('/jobs', async (req, res) => {
  console.log(req.body.Date)
  const job = new Jobs({...req.body,
      Date : new Date(req.body.Date)
  })
  try {
    await job.save()
    res.send(job);
  }
  catch(e){
    res.status(404).send(e.message)
  }
})


module.exports = router;

