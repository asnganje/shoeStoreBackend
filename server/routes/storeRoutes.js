const express = require('express')
const { createStore, getAllStores } = require('../controllers/storeController')
const router = express.Router()

router.route('/store').post(createStore).get(getAllStores)

module.exports = router