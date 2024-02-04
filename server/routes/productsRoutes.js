const express = require('express')
const { getByStoreId, getProductsByStoreId, createProduct, deleteProduct, updateProduct } = require('../controllers/productsController')
const router = express.Router()

router.route('/products').post(createProduct).get(getProductsByStoreId).delete(deleteProduct).patch(updateProduct)

module.exports = router;