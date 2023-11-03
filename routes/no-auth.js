const {saveData} = require('../controllers/no-auth')

const express = require('express')
const router = express.Router()

router.route('/sendData').post(saveData)

module.exports = router