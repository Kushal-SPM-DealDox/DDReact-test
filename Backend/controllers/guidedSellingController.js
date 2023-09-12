const moment = require('moment');
const db = require('../models');
const md5 = require('md5'); // Make sure to import the md5 library
const GuidedSellingQuestion = db.guidedSellingQuestions; // Make sure to replace this with the actual import path
const GuidedSellingSection = db.guidedselling_sections; // Make sure to replace this with the actual import path


const addGuidedSellingQuestions = async (req, res) => {
    const user_id = req.user.user_id;
    const currentTime = new Date();
    const account_id = md5(currentTime + "" + req.body.questions); // Assuming questions is a string
    const { template_type, question_count, question_name, parentSelect, toggle, date, yes_no, yes_no_not, hi_lo_med, hi_norm_lo, currencies, user_message, languages, countries, numbers, whole_numbers, percentage, months, numeric_num, multiline_text, otherinput, } = req.body;

    try {
        const guidedSellingQuestionsData = await GuidedSellingQuestion.create({
            guidedselling_questions_id,
            account_id,
            opportunity_id,
            user_id,
            quote_id,
            template_type,
            section_key,
            question_key,
            question_count,
            question_name,
            parentSelect,
            toggle,
            date,
            yes_no,
            yes_no_not,
            hi_lo_med,
            hi_norm_lo,
            currencies,
            user_message,
            languages,
            countries,
            numbers,
            whole_numbers,
            percentage,
            months,
            numeric_num,
            multiline_text,
            otherinput,
            // Other fields specific to your guidedSellingQuestions model
        });

        if (guidedSellingQuestionsData) {
            for (const question of questions) {
                await guidedSellingQuestionsData.createQuestion({
                    question_text: question.question_text,
                    // Other fields specific to your question model
                });
            }

            res.status(200).json({ success: "Success" });
        } else {
            res.status(200).json({ error: "Failed" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed" });
    }
};


//add guidedSellingSections



const addGuidedSellingSections = async (req, res) => {
    const user_id = req.user.user_id;
    const currentTime = new Date();
    const account_id = md5(currentTime + "" + req.body.surveyQuestions); // Assuming surveyQuestions is a string
    const { section_count, section_name } = req.body;

    try {
        const guidedSellingSectionData = await GuidedSellingSection.create({
            guidedselling_sections_id,
            account_id,
            opportunity_id,
            user_id,
            quote_id,
            template_type,
            section_key,
            section_count,
            section_name,
            // Other fields specific to your guidedSellingSections model
        });

        if (guidedSellingSectionData) {
            res.status(200).json({ success: "Success" });
        } else {
            res.status(200).json({ error: "Failed" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed" });
    }
};

module.exports = {
    addGuidedSellingQuestions, addGuidedSellingSections
};






