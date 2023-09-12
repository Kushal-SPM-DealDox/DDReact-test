const express = require('express')

//Authentication 
const requireAuth = require('../middleware/requireAuth')

// controller functions
const {addConfig,getConfig,updateConfig} = require('../controllers/configController')

const router = express.Router()

// require auth for all routes
router.use(requireAuth)

// config route
router.post('/add', addConfig)

router.post('/get', getConfig)

router.post('/update/:id', updateConfig)



module.exports = router;