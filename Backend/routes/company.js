const express = require('express');

//Authentication 
const requireAuth = require('../middleware/requireAuth')

// Controller Function 
const { updateCompany, getCompany } = require('../controllers/companyController');

const router = express.Router();


// require auth for all routes
router.use(requireAuth)

// Company  route
router.post('/get', getCompany);

router.post('/update', updateCompany);

module.exports = router;


