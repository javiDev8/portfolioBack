const nodemailer = require('nodemailer')
const smtpTransport = require('nodemailer-smtp-transport')
require('dotenv').config()

module.exports = async (req, res) => {
    console.log('req fields: ', req.fields)

    // set email transporter
    const transporter = await nodemailer.createTransport(
        smtpTransport({
            port: 587,
            host: 'mail.devjavi.xyz',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        })
    )

    try {
        await transporter.sendMail({
            from: process.env.EMAIL,
            to: 'javidev.8@gmail.com',
            subject: `${req.fields.name} ${req.fields.email}`,
            text: req.fields.message,
        })

        res.status(201).send()
    } catch (err) {
        console.log('error:', err)
        res.status(500).send()
    }
}
