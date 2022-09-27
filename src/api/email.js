export const welcomeUser = data => {
  return sendEmail(data.useremail)
}

const sendEmail = email => {
  if (!email) {
    console.log('Email is empty, abort.')
    return
  }

  const data = {
    personalizations: [{ to: [{ email }] }],
    from: { email: 'samonjiang@gmail.com' },
    subject: 'Welcome',
    content: [
      {
        type: 'text/html',
        value:
          '<h3>Welcome to DEV@Deakin platform</h3> <p>You will recieve my project update when i post a new project</p>'
      }
    ]
  }
  fetch('/api-sendemail/v3/mail/send', {
    body: JSON.stringify(data), // must match 'Content-Type' header
    // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      Authorization: 'Bearer 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',
      'content-type': 'application/json'
    },
    method: 'POST',
    mode: 'cors'
  }).then(() => {
    console.log('发送邮件成功。')
  })
}
