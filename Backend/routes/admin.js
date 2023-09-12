const express = require('express')

// controller functions
const {addPeople, getPeople, addPeopleByemail } = require('../controllers/adminController')

const router = express.Router()

//addPeople Route
router.post('/people', addPeople);

//getPeople Route
router.get('/people', getPeople);


//getPeopleById Route
router.put('/people/:email', addPeopleByemail);


module.exports = router;