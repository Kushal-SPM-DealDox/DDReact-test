const md5 = require("md5");
const db = require("../models");
const User = db.user;
const SurveyRules = db.surveyRules;
const SurveyActions = db.surveyActions;


//add surveyRules
const addSurveyRules = async (req, res) => {
    const user_id = req.user.user_id;
    const currentTime = new Date();
    const survey_key = md5(currentTime + "" + req.body.SurveyRules);
    const { rule_number,
        rule_name,
        rule_condition_num,
        rule_condition_name,
        question_or_value,
        rule_operator,
        rule_value,
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
        created_on,
        modified_on } = req.body;

    try {
        const surveyRules_data = await SurveyRules.create({
            survey_rules_id,
            survey_section_key,
            survey_key,
            survey_rules_key,
            survey_section_id,
            user_id,
            rule_number,
            rule_name,
            rule_condition_num,
            rule_condition_name,
            question_or_value,
            rule_operator,
            rule_value,
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
            created_on,
            modified_on,
            // Other fields specific to your surveyQuestions model

        });
        if (surveyRules_data) {
            for (const rules of rules) {
                await surveyRules_data.createRules({
                    rules_text: rules.rules_text,
                });

            }
            res.status(200).json({ success: "Success" });
        } else {
            res.status(200).json({ error: "Failed" });
        }
    } catch (error) {
        console(error);
        res.status(500).json({ error: "Failed" });


    }
};

// Add surveyActions
const addSurveyActions = async (req, res) => {
    const user_id = req.user.user_id;
    const currentTime = new Date();
    const survey_key = md5(currentTime + "" + req.body.SurveyActions);
    const { survey_action_number,
        survey_action_name,
        survey_actions_sections, } = req.body;

    try {
        const surveyActions_data = await SurveyActions.create({
            survey_action_id,
            survey_section_key,
            survey_key,
            survey_question_key,
            survey_section_id,
            user_id,
            survey_action_number,
            survey_action_name,
            survey_actions_sections,

        });
        if (surveyActions_data) {
            for (const actions of actions) {
                await surveyActions_data.createActions({
                    actions_text: actions.actions_text,
                });
            }

            res.status(200).json({ success: "Success" });
        } else {
            res.status(200).json({ error: "Failed" });
        }

    } catch (error) {
        console(error);
        res.status(500).json({ error: "Failed" });
    }


};

module.exports = {
    addSurveyRules, addSurveyActions
};