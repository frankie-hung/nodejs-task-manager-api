const sgMail = require('@sendgrid/mail')
const { application } = require('express')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'airming@gmail.com',
        subject: 'Welcome!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app. `
    })
}

const sendGoodbyeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'airming@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Hi ${name}. We are sorry about your cancellation. Please let us know how we can improve to keep you stay. `
    })
}


module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
}
