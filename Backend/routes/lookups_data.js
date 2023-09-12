const express = require('express')

//Authentication 
const requireAuth = require('../middleware/requireAuth')

// controller functions
const { addLookupsData, getLookupsData } = require('../controllers/lookups_dataController')

const router = express.Router()

// require auth for all routes
router.use(requireAuth)

// lookups route
router.post('/add', addLookupsData)

router.post('/get', getLookupsData)

module.exports = router;

