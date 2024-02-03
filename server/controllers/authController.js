const User = require('../models/User')

const createUser = async (req,res) => {
    try {
        const user = await User.create(req.body)
        res.status(201).json({
            status: 'success',
            msg: user
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            msg: error
        })
    }
}

module.exports = {createUser}