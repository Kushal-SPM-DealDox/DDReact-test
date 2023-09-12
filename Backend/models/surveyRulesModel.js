const moment = require('moment');
const db = require('../models');
const User = db.user;

module.exports = (sequelize, Sequelize) => {
    const surveyRule = sequelize.define("surveyRule", {
        survey_rules_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        survey_section_key: {
            type: Sequelize.STRING,
            allowNull: false
        },
        survey_key: {
            type: Sequelize.STRING,
            allowNull: false
        },
        survey_rules_key: {
            type: Sequelize.STRING,
            allowNull: true
        },
        survey_section_id: {
            type: Sequelize.INTEGER,
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
        rule_number: {
            type: Sequelize.STRING,
            allowNull: false
        },
        rule_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        rule_condition_num: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        rule_condition_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        question_or_value: {
            type: Sequelize.STRING,
            allowNull: false
        },
        rule_operator: {
            type: Sequelize.STRING,
            allowNull: false
        },
        rule_value: {
            type: Sequelize.STRING,
            allowNull: false
        },
        toggle: {
            type: Sequelize.STRING,
            allowNull: true
        },
        date: {
            type: Sequelize.STRING,
            allowNull: true
        },
        yes_no: {
            type: Sequelize.STRING,
            allowNull: true
        },
        yes_no_not: {
            type: Sequelize.STRING,
            allowNull: true
        },
        hi_lo_med: {
            type: Sequelize.STRING,
            allowNull: true
        },
        hi_norm_lo: {
            type: Sequelize.STRING,
            allowNull: true
        },
        currencies: {
            type: Sequelize.STRING,
            allowNull: true
        },
        user_message: {
            type: Sequelize.STRING,
            allowNull: true
        },
        languages: {
            type: Sequelize.STRING,
            allowNull: true
        },
        countries: {
            type: Sequelize.STRING,
            allowNull: true
        },
        numbers: {
            type: Sequelize.STRING,
            allowNull: true
        },
        whole_numbers: {
            type: Sequelize.STRING,
            allowNull: true
        },
        percentage: {
            type: Sequelize.STRING,
            allowNull: true
        },
        months: {
            type: Sequelize.STRING,
            allowNull: true
        },
        numeric_num: {
            type: Sequelize.STRING,
            allowNull: true
        },
        multiline_text: {
            type: Sequelize.STRING,
            allowNull: true
        },
        otherinput: {
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

    return surveyRule;
};
