const Store = require("../models/Store")

const createStore = async (req, res)=> {
    try {
        const store = await Store.create(req.body)
        res.status(200).json({
            status: 'success',
            msg: store
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            msg: error
        })
    }
}

// const getStore = async (req, res)=> {
//     try {
//         const store = await Store.findOne(req.body)
//         res.status(200).json({
//             status: 'success',
//             msg: store
//         })
//     } catch (error) {
//         res.status(404).json({
//             status: 'fail',
//             msg: error
//         })
//     }
// }

const getAllStores = async (req, res)=> {
    try {
        const stores = await Store.find({})
        res.status(200).json({
            status: 'success',
            msg: stores
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            msg: error
        })
    }
}

module.exports = {createStore, getAllStores}