const express = require('express')
const uploadImageMiddleware = require('../middleware/uploadImageMiddleware')

// controller functions
const { getDoctypes, addDoctype, deleteDoctypeById, deletOneSectionById, updateDoctypeById } = require('../controllers/doctypeController')

const router = express.Router()

// security route
router.get('/get', getDoctypes)
router.post('/add',
    uploadImageMiddleware.fields([
        { name: 'template_file', maxCount: 1 },
        { name: 'watermark_file', maxCount: 1 }
    ]),
    addDoctype
)
router.delete('/delete/:id', deleteDoctypeById)

router.delete('/deleteSection/:id', deletOneSectionById);

router.put('/update/:id',
    uploadImageMiddleware.fields([
        { name: 'template_file', maxCount: 1 },
        { name: 'watermark_file', maxCount: 1 }
    ]),
    updateDoctypeById
)
// router.put('/update/:id', updateDoctypeById)

//router.put( "/updateFile", uploadImageMiddleware.single("pdffile"), uploadFile);


module.exports = router;