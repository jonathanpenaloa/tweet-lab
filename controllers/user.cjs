const User = require("../models/User.cjs");

const createUser = async (req, res) => {
  const responseFromDB = await User.create(req.body);
  if (responseFromDB) {
    res.json(responseFromDB);
  } else {
    res.status(400).json("user was not Created...");
  }
};

module.exports = {
  createUser,
};