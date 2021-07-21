const nodemailer = require('nodemailer')

let transport = nodemailer.createTransport({
  host: 'smtp.webmail.com',
  port: 587,
  auth: {
    user: 'mail@mail.com',
    pass: '',
  },
})

const message = {
  from: 'form@mail.com', // Sender address
  to: 'to@mail.com', // List of recipients
  subject: 'Design Your Model S | Tesla', // Subject line
  // text: 'Have the most fun you can in a car. Get your Tesla today!', // Plain text body
  html: '<h1>Have the most fun you can in a car!</h1><p>Get your <b>Tesla</b> today!</p>',
  attachments: [
    {
      // Use a URL as an attachment
      filename: 'your-testla.png',
      path: 'https://media.gettyimages.com/photos/view-of-tesla-model-s-in-barcelona-spain-on-september-10-2018-picture-id1032050330?s=2048x2048',
    },
  ],
}

transport.sendMail(message, function (err, info) {
  if (err) {
    console.log(err)
  } else {
    console.log(info)
  }
})
