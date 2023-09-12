const express = require('express')

// controller functions
const { getSecurity, addSecurity , updateSecurityById, deleteSecurityById  } = require('../controllers/securityController')

const router = express.Router()

// security route
router.get('/', getSecurity)
router.post('/add', addSecurity)
router.put('/update/:id', updateSecurityById)
router.delete('/delete/:id', deleteSecurityById)


module.exports = router;