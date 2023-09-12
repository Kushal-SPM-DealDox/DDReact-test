const express = require('express')

//Authentication 
const requireAuth = require('../middleware/requireAuth')

// controller functions
const { addAccount, getAccount, updateAccount, deleteAccount} = require('../controllers/accountController')

const router = express.Router()

// require auth for all routes
router.use(requireAuth)

// Accounts route
router.post('/add', addAccount)

router.post('/get', getAccount)

router.post('/update/:id', updateAccount)

router.post('/delete/:id', deleteAccount)



module.exports = router;