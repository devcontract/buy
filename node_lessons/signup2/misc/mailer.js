var nodemailer = require('nodemailer');


var transport = nodemailer.createTransport({
   service:'gmail',
   auth: {
       user: 'noiselessspeach@gmail.com',
       pass: 'Milor@dov@10'
   },
   tls: {
  rejectUnauthorized: false
   }
});

module.exports = {
    sendEmail(from, to, subject, html){
        return new Promise((resolve, reject)=>{
            transport.sendMail({from, subject, to, html }, (err, info)=>{
                if (err) reject(err);

                resolve(info);
            })
        })
    }
}