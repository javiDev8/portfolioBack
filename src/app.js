const express = require('express')
const path = require('path')
const formidable = require('express-formidable')
require('dotenv').config()

const app = express()

// middlewares
app.use(formidable())

// static files
app.use(express.static(path.resolve(__dirname, './static')))

app.post('/api/contact', require(path.resolve(__dirname, './contact.js')))

// catch client-side router requests
app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, './static/index.html'))
)

// init server
const port = process.env.PORT
app.listen(port, () => console.log(`server listening on port ${port}`))
