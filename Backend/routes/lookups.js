const express = require('express')

//Authentication 
const requireAuth = require('../middleware/requireAuth')

// controller functions
const { addLookups, getLookups, updateLookups } = require('../controllers/lookupsController')

const router = express.Router()

// require auth for all routes
router.use(requireAuth)

// Accounts route
router.post('/add', addLookups)
router.post('/update', updateLookups)


router.post('/get', getLookups)

module.exports = router;

