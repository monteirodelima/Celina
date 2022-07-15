const express = require('express')
const app = express()

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json)

const routes = require('./routes/router.js')

app.use('/', routes)

app.listen(3000, () => console.log('listenning on port 3000'))