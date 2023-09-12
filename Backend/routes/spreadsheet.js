const express = require('express')

const requireAuth = require('../middleware/requireAuth')

const {getCatalogQuestions  , getAnswerByQuestionId } = require('../controllers/spreadsheetController')

const router = express.Router()

router.use(requireAuth)


router.post('/display/:position', getCatalogQuestions);
// router.get('/display/:survey_questions_id', getByPosition);
router.post('/display/answer/:questions_category', getAnswerByQuestionId);


module.exports = router;

//getCatalogQuestions getByPosition,