const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please provide first name']
    },
    lastName: {
        type: String,
        required: [true, 'Please provide last name']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Please provide email']
    },
    password: {
        type: String,
        required: [true, 'Please provide last name']
    }
})


const User = mongoose.model('User', UserSchema)
module.exports = User