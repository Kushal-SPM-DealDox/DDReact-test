const express = require('express')
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const {getTemPlate, addTemplate, UpdateTemplateById, deleteTemplateById} = require('../controllers/templateController')


const router = express.Router()

// security route
router.get('/get', getTemPlate)
router.post('/add', upload.single('fileFieldName'), addTemplate)
router.put('/update/:id', upload.single('fileFieldName'), UpdateTemplateById )
router.delete('/delete/:id', deleteTemplateById)


module.exports = router;