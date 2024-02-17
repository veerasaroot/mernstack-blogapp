const database = require('../config/database')
const { Schema } = require('mongoose')
const mongoose = require('mongoose')

database.collection('users')

const userSchema = new Schema({
    _id: String,
    username: String,
    email: String,
    password: String,
    created_at: Date
})

const User = mongoose.model('User', userSchema)
module.exports = User