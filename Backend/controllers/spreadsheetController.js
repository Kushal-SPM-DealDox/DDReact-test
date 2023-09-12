const md5 = require("md5");
const db = require("../models");
const SurveyQuestions = db.surveyQuestions;


// SPREAD SHEET  DATA DISPLAY

const getCatalogQuestions = async (req, res) => {
        const user_id = req.user.user_id;
        const questionId = req.params.position;
    
        console.log(user_id);
        console.log(questionId);
    
        try {
            const question_data = await SurveyQuestions.findAll({ where: { 
                // user_id: user_id,
                survey_questions_id: questionId
            } });
    
            if (!question_data || question_data.length === 0) {
                res.status(200).json({ status: "Failed", message: "Account Data Not Found" });
            } else {
                res.status(200).json({ data: question_data });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed" });
        }
    }

// const getByPosition = async (req, res) => {
//     const user_id = req.user.user_id;
//     const survey_questions_id = req.params.survey_questions_id;
//     console.log(user_id);
//     console.log(survey_questions_id);

//     try {
//         const byPosition = await SurveyQuestions.findAll({
//             where: {
//                 user_id: user_id,
//                 survey_questions_id: survey_questions_id,
//             },
//         });

//         if (!byPosition || byPosition.length === 0) {
//             res.status(200).json({ status: "Failed", message: "Account Data Not Found" });
//         } else {
//             res.status(200).json({ data: byPosition });
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Failed" });
//     }
// }

// Update the route to accept GET requests

const getAnswerByQuestionId = async (req, res) => {
    const user_id = req.user.user_id;
    const questions_category = req.params.questions_category;

    try {
        const byQuestionId = await SurveyQuestions.findAll({
            where: {
                user_id: user_id,
                survey_questions_name: questions_category, // Update the parameter name here
            },
        });
        if (!byQuestionId || byQuestionId.length === 0) {
            res.status(200).json({ status: "Failed", message: "Account Data Not Found" });
        } else {
            res.status(200).json({ data: byQuestionId });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed" });
    }
}


module.exports = { getCatalogQuestions,getAnswerByQuestionId }

//getCatalogQuestions  getByPosition, ,


// const getCatalogQuestions = async (req, res) => {
//     // const user_id = req.user.user_id;
//     const questionId = req.params.position;

//     console.log(user_id);
//     console.log(questionId);

//     try {
//         const question_data = await SurveyQuestions.findAll({ where: { 
//             // user_id: user_id,
//             survey_questions_id: questionId
//         } });

//         if (!question_data || question_data.length === 0) {
//             res.status(200).json({ status: "Failed", message: "Account Data Not Found" });
//         } else {
//             res.status(200).json({ data: question_data });
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Failed" });
//     }
// }