const Product = require('../models/Product')

const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(201).json({
            status: 'success',
            msg: product
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            msg: error
        })
    }
}

const getProductsByStoreId = async (req, res)=> {
    try {
        const products = await Product.find(req.body)
        res.status(200).json({
            status: 'success',
            msg: products
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            msg: error
        })
    }
}

const deleteProduct = async (req,res) => {
    const productId = req.body.id
    try {
        await Product.findByIdAndDelete(productId)
        res.status(200).json({
            status: 'success',
            msg: "Delete done"
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            msg: error
        })
    }
}

const updateProduct = async (req,res) => {
    const {id, ...rest} = req.body
    try {
        const product = await Product.findByIdAndUpdate({_id: id}, rest, {
            new: true,
            runValidators: true,
        })
        res.status(200).json({
            status: 'success',
            msg: product
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            msg: error
        })
    }
}

module.exports = {createProduct, getProductsByStoreId, deleteProduct, updateProduct}