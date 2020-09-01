const express = require('express')
const path = require('path')
require('dotenv').config()

const app = express()

app.use(express.static(path.resolve(__dirname, './static')))

const port = process.env.PORT
app.listen(port, () => console.log( `server listening on port ${ port }` ))
