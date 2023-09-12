const moment = require('moment');
const db = require('../models');
const User = db.user;

module.exports = (sequelize, Sequelize) => {
    const surveyQuestion = sequelize.define("surveyQuestion", {
        survey_questions_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        survey_section_key: {
            type: Sequelize.STRING,
            allowNull: false
        },
        survey_questions_key: {
            type: Sequelize.STRING,
            allowNull: false
        },
        survey_key: {
            type: Sequelize.STRING,
            allowNull: false
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'users', // Assuming 'users' is the name of the users table
                key: 'user_id'
            }
        },
        survey_questions_num: {
            type: Sequelize.STRING,
            allowNull: false
        },
        survey_questions_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        survey_questions_required: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        survey_questions_toggle: {
            type: Sequelize.STRING,
            allowNull: true
        },
        questions_note: {
            type: Sequelize.STRING,
            allowNull: true
        },
        questions_category: {
            type: Sequelize.STRING,
            allowNull: true
        },
        questions_external_reference_id: {
            type: Sequelize.STRING,
            allowNull: true
        },
        questions_link_to_question: {
            type: Sequelize.STRING,
            allowNull: true
        },
        created_on: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            get() {
                return moment(this.getDataValue('created_on')).format('DD-MM-YYYY h:mm:ss');
            }
        },
        modified_on: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            get() {
                return moment(this.getDataValue('modified_on')).format('DD-MM-YYYY h:mm:ss');
            }
        },
    });

    return surveyQuestion;
};
