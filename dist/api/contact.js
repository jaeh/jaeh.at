const lambda = (req, res) => {
  const mailer = require('nodemailer')

  if (!config.SMTP.TO) {
    console.log('ERROR: config.SMTP.TO is not defined, Contact will not send emails')
    return () => {}
  }

  let smtpTransport
  if (config.SMTP_TRANSPORT) {
    smtpTransport = config.SMTP_TRANSPORT
  } else if (config.SMTP) {
    if (!config.SMTP.USER) {
      console.log('ERROR: config.SMTP.USER not defined, Contact will not send emails')
      return () => {}
    }

    if (!config.SMTP.PASS) {
      console.log('ERROR: config.SMTP.PASS not defined, Contact will not send emails')
      return () => {}
    }

    // config.SMTP.SERVICE = config.SMTP.SERVICE || 'Gmail'

    smtpTransport = mailer.createTransport({
      host: config.SMTP.HOST || 'smtp.gmail.com',
      secure: true,
      auth: {
        user: config.SMTP.USER,
        pass: config.SMTP.PASS,
      },
    })
  } else {
    console.log('ERROR: no SMTP settings found, Contact will not send emails.')
    return () => {}
  }


  try {
    const { from, subject, text } = JSON.parse(req.body)

    const mail = {
      from,
      to: config.SMTP.TO,
      subject,
      text: `
Email from: ${from}

${text}`,
    }

    smtpTransport.sendMail(mail, error => {
      if (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' })
        res.end('Error sending email')
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end('Email sent')
      }

      smtpTransport.close()
    })
  }
  catch(e) {
    res.writeHead(400, { 'Content-Type': 'text/plain' })
    res.end('Invalid Data')
    return
  }
}

module.exports = (req, res) => {
  req.body = ''
  req.on('data', chunk => req.body += chunk)
  req.on('end', (...args) => lambda(req, res, ...args))
}