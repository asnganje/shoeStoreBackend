const express = require('express')
const { createStore, getStore } = require('../controllers/storeController')
const router = express.Router()

router.route('/store').post(createStore).get(getStore)

module.exports = router