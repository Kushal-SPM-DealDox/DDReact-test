const jwt = require('jsonwebtoken')
const db = require("../models");
const User = db.user;

const requireAuth = async (req, res, next) => {
  // verify user is authenticated
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({error: 'Authorization token required'})
  }

  const token = authorization.split(' ')[1]

  try {
    const { _id } = jwt.verify(token, process.env.SECRET)

    // req.user = await User.findOne({ _id }).select('_id')
    console.log(_id);
    req.user = await User.findOne({where: { user_id: _id }});

    next()

  } catch (error) {
    console.log(error)
    res.status(401).json({error: 'Request is not authorized'})
  }
}

module.exports = requireAuth