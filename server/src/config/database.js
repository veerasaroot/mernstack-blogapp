const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/blogapp')

const db = mongoose.connection

module.exports = db