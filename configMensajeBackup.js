var nodemailer = require('nodemailer');
var sesTransport = require('nodemailer-ses-transport');
var smtpPassword = require('aws-smtp-credentials');

var mailOptions = {
  from: 'platform@thetixsapp.com',
  to: 'info@andesproadventures.com',
  text: 'Hola amiguitos!',
  html: '<b>Hola amiguitos html</b>',
};
function callback(error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Message sent: ' + info.response);
  }
}




//ses-smtp-user.20191015-043958
// Send e-mail using AWS SES
// mailOptions.subject = 'Nodemailer SES transporter';
// var sesTransporter = nodemailer.createTransport(sesTransport({
//   accessKeyId: 'AKIAXD7DMPNEUXH4MFQ7',
//   secretAccessKey: 'BDAlhF4Bbe3sE0DKVZUyE2Y2KIOTnJLuiSXIicLingkq',
//   region: process.env.AWS_REGION
// }));
// sesTransporter.sendMail(mailOptions, callback);

// Send e-mail using SMTP
mailOptions.subject = 'Nodemailer SMTP transporter';
var smtpTransporter = nodemailer.createTransport({
  port: 465,
  host: 'email-smtp.us-east-1.amazonaws.com',
  secure: true,
  auth: {
    user:'AKIAXD7DMPNEXZYNXUZ6',
    pass: 'BKZIeh7mzbEzCZsgGbGmy7PDOmZlZAzsv50de56+TMRo',
  },
  debug: true
});
smtpTransporter.sendMail(mailOptions, callback);


