const express = require('express')

//Authentication 
const requireAuth = require('../middleware/requireAuth')

// controller functions
const { addOpportunity, getOpportunity, updateOpportunity, deleteOpportunity } = require('../controllers/opportunityController')

const router = express.Router()

// require auth for all routes
router.use(requireAuth);

// Accounts route
router.post('/add', addOpportunity);

router.post('/get', getOpportunity);

// router.post('/get/:key', getOpportunityByKey);

router.post('/update/:id', updateOpportunity);

router.post('/delete/:id', deleteOpportunity);

module.exports = router;