const CustomAPIError = require('../errors/custom-error')
const {StatusCodes} = require('http-status-codes')
const users = require('../models/users')

const saveData = async (req, res)=>{
  const user = await users.create(req.body)
  res.status(StatusCodes.CREATED).json({user})
}

module.exports = {
  saveData,
}