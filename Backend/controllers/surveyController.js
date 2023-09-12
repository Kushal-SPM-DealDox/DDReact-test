const md5 = require("md5");
const db = require("../models");
const User = db.user;
const Survey = db.survey; // Make sure the model name matches your model name
const SurveyQuestion = db.surveyQuestions; // Make sure the model name matches your model name
const SurveySections = db.surveySections;




// add a survey

const addSurvey = async (req, res) => {
    if (req.user) {
        const user_id = req.user.user_id;
        const field_name = req.body.field_name;
        const field_value = req.body.field_value;
        const setup_key = req.body.setup_key;

        var d = Date();
        var a = d.toString();
        var survey_key = setup_key;
        

        try {

            if (field_name == "title" && setup_key == "") {
                if (setup_key == "") {
                    survey_key = md5(a + "" + field_name + "" + field_value);
                }
                var data = {};
                if (field_name == "title") {
                    data = { user_id, survey_key, title: field_value };
                }
                const survey_data = await Survey.create(data);

                if (survey_data) {

                    res.status(200).json({ status: "Success", survey_key: survey_key });
                }
                else {
                    res.status(200).json({ status: "Failed" });
                }
            } else {
                if (setup_key != "") {
                    const survey_exists = await Survey.findAll({ where: { user_id: user_id, survey_key: setup_key } });
                    if (survey_exists) {
                        if (field_name == "title") {
                            data = { title: field_value };
                        }
                        if (field_name == "category") {
                            data = { category: field_value };
                        }
                        if (field_name == "status") {
                            data = { status: field_value };
                        }
                        if (field_name == "globals") {
                            data = { globals: field_value };
                        }
                        if (field_name == "wide") {
                            data = { wide: field_value };
                        }
                        if (field_name == "update_type") {
                            data = { update_type: field_value };
                        }
                        const survey_data = await Survey.update(data, { where: { user_id: user_id, survey_key: setup_key } });
                        if (survey_data) {
                            const survey = await Survey.findOne({ where: { user_id: user_id, survey_key: setup_key } });

                            res.status(200).json({ status: "Success", survey_key: setup_key, data: survey });
                        }
                        else {
                            res.status(200).json({ status: "Failed" });
                        }
                    } else {
                        res.status(200).json({ status: "Failed" });
                    }
                }

            }
        } catch (error) {
            res.status(200).json({ status: "Failed" });
        }

    } else {
        res.status(200).json({ status: "Failed", message: "Authorization Failed" });

    }
};

// get a survey
const getSurvey = async (req, res) => {
    if (req.user) {
        const user_id = req.user.user_id;
        try {
            const survey_data = await Survey.findAll({ where: { user_id: user_id } });

            if (!survey_data) {
                res.status(200).json({ status: "Failed", message: "Loopups Data Not Found" });
            } else {
                res.status(200).json({ status: "Success", data: survey_data });
            }
        } catch (error) {
            res.status(200).json({ status: "Failed", message: "Failed! " + error.message });
        }
    } else {
        res.status(200).json({ status: "Failed", message: "Authorization Failed" });
    }
}

// GUIDED SELLING SURVEY 
const getSurveyGuidedSelling = async (req, res) => {
    if (req.user) {
        const user_id = req.user.user_id;
        try {
            const survey_data = await Survey.findAll({ where: { user_id: user_id, status: 'published' } });

            if (!survey_data) {
                res.status(200).json({ status: "Failed", message: "Loopups Data Not Found" });
            } else {
                res.status(200).json({ status: "Success", data: survey_data });
            }
        } catch (error) {
            res.status(200).json({ status: "Failed", message: "Failed! " + error.message });
        }
    } else {
        res.status(200).json({ status: "Failed", message: "Authorization Failed" });
    }
}

//add surveyQuestions

//add surveySection
const addSurveySections = async (req, res) => { // Add "async" here
    if (req.user) {
        const user_id = req.user.user_id;
        var {section_key, section_num, survey_key, field_name, field_value} = req.body;

        var d = Date();
        var a = d.toString();
        
        try {
            if (field_name == "section_title" && section_key == "") { // Fix typo here, change "setip_key" to "setup_key"
                if (section_key == "") {
                    section_key = md5(a + "" + field_name + "" + field_value);
                }
                var surveySecData = {};
                console.log("+++++++++++++++1")
                if (field_name == "section_title") {
                    surveySecData = { 
                        user_id:user_id, 
                        survey_section_key:section_key, 
                        survey_key:survey_key, 
                        survey_section_number:section_num, 
                        survey_section_title: field_value,
                        survey_section_status: 0
                     };
                }
                console.log(surveySecData);

                const survey_section_data = await SurveySections.create(surveySecData);

                if (survey_section_data) {
                    res.status(200).json({ status: "Success", survey_key: survey_key, section_key:section_key });

                }
                else {
                    res.status(200).json({ status: "Failed", message:"error on submitting!" });
                }
            } else {
                if (section_key != "" && survey_key != "") {
                    const survey_section_exists = await SurveySections.findAll({ where: { user_id:user_id, survey_section_key:section_key, survey_key:survey_key } });
                    if (survey_section_exists) { // Fix typo here, change "survey_exist" to "survey_section_exists"
                        var data = {};

                        if (field_name == "section_title") {
                            data = { survey_section_number:section_num, survey_section_title: field_value };
                        }

                        if (field_name == "section_hide") {
                            data = { survey_section_number:section_num, survey_section_status: field_value }
                        }

                        const updated_survey_section_data = await SurveySections.update(data, { where: { user_id:user_id, survey_section_key:section_key, survey_key:survey_key } });
                        if (updated_survey_section_data) {
                            const survey_section = await SurveySections.findOne({ where: { user_id:user_id, survey_section_key:section_key, survey_key:survey_key } });

                            res.status(200).json({ status: "Success", survey_key: survey_key, section_key:section_key, data: survey_section });
                        }
                        else {
                            res.status(200).json({ status: "Failed", message:"error on submitting!" });
                        }

                    } else {
                        res.status(200).json({ status: "Failed", message:"Section not exists!" });
                    }
                }
            }
        } catch (error) {
            res.status(200).json({ status: "failed", message:"Failed! "+error.message });
        }
    } else {
        res.status(200).json({ status: "failed", message: "authorization Failed" });
    }
};

const addSurveyQuestions = async (req, res) => {

    if (req.user) {
        const user_id = req.user.user_id;
        console.log(req.body)
        const field_name = req.body.field_name;
        const field_value = req.body.field_value;
        const survey_key = req.body.survey_key;
        const section_key = req.body.section_key;
        var question_key = req.body.question_key;
        var question_num = req.body.question_num;

        var d = Date();
        var a = d.toString();
       

        try {

            if (field_name == "question_name" && question_key == "") {
                if (question_key == "") {
                    question_key = md5(a + "" + field_name + "" + field_value);
                }
                var data = {};
                if (field_name == "question_name") {
                    data = { survey_section_key:section_key, survey_questions_key:question_key, survey_key:survey_key, user_id:user_id, survey_questions_num:question_num, survey_questions_name: field_value };
                }
                const survey_data = await SurveyQuestion.create(data);

                if(survey_data) {
                    res.status(200).json({ status: "Success", question_key: question_key });
                }
                else {
                    res.status(200).json({ status: "Failed" });
                }
            } else {
                if (question_key != "") {
                    const survey_exists = await SurveyQuestion.findAll({ where: { survey_section_key:section_key, survey_questions_key:question_key, survey_key:survey_key, user_id:user_id } });
                    if (survey_exists) {
                        if (field_name == "question_name") {
                            data = { survey_questions_num:question_num, survey_questions_name: field_value };
                        }
                        if (field_name == "toggle") {
                            data = { survey_questions_num:question_num, survey_questions_toggle: field_value };
                        }
                        // if (field_name == "status") {
                        //     data = { status: field_value };
                        // }
                        // if (field_name == "globals") {
                        //     data = { globals: field_value };
                        // }
                        // if (field_name == "wide") {
                        //     data = { wide: field_value };
                        // }
                        // if (field_name == "update_type") {
                        //     data = { update_type: field_value };
                        // }
                        const survey_data = await SurveyQuestion.update(data, { where: { survey_section_key:section_key, survey_questions_key:question_key, survey_key:survey_key, user_id:user_id } });
                        if (survey_data) {
                            const survey = await SurveyQuestion.findOne({ where: { survey_section_key:section_key, survey_questions_key:question_key, survey_key:survey_key, user_id:user_id } });

                            res.status(200).json({ status: "Success", question_key: question_key, data: survey });
                        }
                        else {
                            res.status(200).json({ status: "Failed" });
                        }
                    } else {
                        res.status(200).json({ status: "Failed" });
                    }
                }else{
                    res.status(200).json({ status: "Failed" });

                }

            }
        }catch(error)
        {
            res.status(200).json({ status: "Failed", message:"message :: "+error.message });
        }
    }else{
        res.status(200).json({ status: "Failed", message: "Authorization Failed" });
    }
   
};


//add surveySections

// const addSurveySections = async (req, res) => {
//     const user_id = req.user.user_id;
//     const currentTime = new Date();
//     const { survey_section_key, survey_section_number, survey_key, field_name, field_value } = req.body;

//     try {
//         if (survey_key) {
//             if (section_key == "") {
//                 var section_key_new = md5(currentTime + "" + req.body.surveySections);

//             }
//         }
//         const surveySections_data = await SurveySections.create({
//             survey_section_id,
//             survey_section_key,
//             survey_key,
//             user_id,
//             survey_section_number,
//             survey_section_title,
//             survey_section_status,
//             created_on,
//             modified_on,

//         });

//         if (surveySections_data) {
//             for (const sections of sections) {
//                 await surveySections_data.createSections({
//                     sections_text: sections.sections_text,
//                 });
//             }

//             res.status(200).json({ success: "Success" });
//         } else {
//             res.status(200).json({ error: "Failed" });
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Failed" });
//     }

// };



const getSurveySections = async (req, res) => {
    if (req.user) {
        const user_id = req.user.user_id;
        var {survey_key} = req.body;

        try {
            const survery_data = await SurveySections.findAll({ where: { user_id: user_id, survey_key:survey_key } });

            if (!survery_data) {
                res.status(200).json({ status: "Failed", message: "survey Data Not Found" });
            } else {
                res.status(200).json({ status: "Success", data: survery_data });
            }
        } catch (error) {
            res.status(200).json({ status: "Failed", message: "Failed! " + error.message });
        }
    } else {
        res.status(200).json({ status: "Failed", message: "Authorization Failed" });
    }
}

const getSurveyQuestions = async (req, res) => {
    if (req.user) {
        const user_id = req.user.user_id;
        var {survey_key} = req.body;

        try {
            const survery_data = await SurveyQuestion.findAll({ where: { user_id: user_id, survey_key:survey_key } });

            if (!survery_data) {
                res.status(200).json({ status: "Failed", message: "survey Data Not Found" });
            } else {
                res.status(200).json({ status: "Success", data: survery_data });
            }
        } catch (error) {
            res.status(200).json({ status: "Failed", message: "Failed! " + error.message });
        }
    } else {
        res.status(200).json({ status: "Failed", message: "Authorization Failed" });
    }
}




module.exports = {
    addSurvey, addSurveyQuestions, addSurveySections, getSurvey, getSurveySections, getSurveyQuestions, getSurveyGuidedSelling
};
