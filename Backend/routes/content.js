const express = require('express')

//Authentication 
const requireAuth = require('../middleware/requireAuth')

// controller functions
const {addContent,getContent, updateContent, deleteContent} = require('../controllers/contentController')

const router = express.Router()

// require auth for all routes
router.use(requireAuth)

// Content route
router.post('/add', addContent);

router.post('/get', getContent);

router.post('/update/:id', updateContent);

router.post('/delete/:id', deleteContent);

module.exports = router;