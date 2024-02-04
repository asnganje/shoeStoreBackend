const mongoose = require('mongoose')

const storeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please provide store name']
    }
})

const Store = mongoose.model('Store', storeSchema)
module.exports = Store;