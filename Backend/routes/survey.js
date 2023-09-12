const express = require('express');

//Authhentication
const requireAuth = require('../middleware/requireAuth');

//controller function
const { addSurvey, addSurveyQuestions, addSurveySections, getSurvey, getSurveySections, getSurveyQuestions, getSurveyGuidedSelling } = require('../controllers/surveyController');

const { addSurveyRules, addSurveyActions } = require('../controllers/surveyRulesActionsController');

const { addGuidedSellingQuestions, addGuidedSellingSections } = require('../controllers/guidedSellingController')

const router = express.Router()

//require auth for all routes
router.use(requireAuth)


// Survey routes
router.post('/addSurvey', addSurvey); // Endpoint for adding surveys
router.post('/getSurvey', getSurvey);

// Survey Questions routes
router.post('/addSurveyQuestions', addSurveyQuestions);

// Survey Section routes 
router.post('/addSurveySections', addSurveySections);
router.post('/getSurveySections', getSurveySections);
router.post('/getSurveyQuestions', getSurveyQuestions);



// Survey Rules routes
router.post('/addSurveyRules', addSurveyRules);

//Survey Actions routes
router.post('/addSurveyActions', addSurveyActions);

// GuidedSellingQuestions routes
router.post('/addGuidedSellingQuestions', addGuidedSellingQuestions);

// GuidedSellingSections routes
router.post('/addGuidedSellingSections', addGuidedSellingSections);

router.post('/getSurveyGuidedSelling', getSurveyGuidedSelling);


module.exports = router;