const User = require('../models/User.cjs')


const createUser = async (req, res) => {
    let response = await User.create(req.body);
    if (response) {
        res.json(response)
    } else {
        res.status(400).json("creation falied!")
    }
}

module.exports = {
    createUser,
}