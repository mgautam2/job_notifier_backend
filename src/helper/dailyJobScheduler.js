var schedule = require('node-schedule');

const Jobs = require ('../models/jobs.js')

const day = new Date(Date.now()).getDate();
const month = new Date(Date.now()).getMonth() + 1;

async function jobScheduler () {
  
  const jobs = await Jobs.find({day: 9})
  jobs.forEach( (job , index )=> runOne(job,index))
}

function runOne (job, i){
  const j = schedule.scheduleJob(` ${46 +i} 18 7 8 *`, function(y){
    console.log(i)
    console.log(job.description)
    console.log("Bhosdike job hai teri ")
  }
  )
  
}







module.exports = jobScheduler; 