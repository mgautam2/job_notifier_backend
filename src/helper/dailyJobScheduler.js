var schedule = require('node-schedule');
const sendText = require('./sentSMS.js')
const moment = require('moment')

const Jobs = require ('../models/jobs.js')

 function runOne (job){
   console.log("Yeah")
  schedule.scheduleJob(job.Date, async function(y) { 
    
    var t = sendText(job.description)
    .then((message)=> {
      console.log("Text Sent")
    })
    .catch(e => {
      console.log("Maa chood di Twilio nai!", e)
    })  
  })
}


async function JobScheduler () {
  
  const day = new Date(Date.now()).getDate() ;
  const month = new Date(Date.now()).getMonth() + 1;
  // const dailyJob = schedule.scheduleJob('0 0 */1 * *', async function(){
    
    try {
      const jobs = await Jobs.find({day, month})
      jobs.forEach(  (job )=>  runOne(job))
      
    }
    catch(e) {
      console.log(error)
    }
    
  // }
}


module.exports = JobScheduler; 

