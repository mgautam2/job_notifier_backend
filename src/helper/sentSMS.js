const client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);

module.exports =  function sendText (data){

return client.messages
  .create({
     body: data,
     from: '+12028834839',
     to: process.env.PHONE_NO
   })
  
}

