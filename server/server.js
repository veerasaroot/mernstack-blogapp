const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const cors = require('cors')

const router = require('./src/routes/web')

app.use(express.static('public'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(router)

app.listen(3000)