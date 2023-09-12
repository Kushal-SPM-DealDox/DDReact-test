const moment = require('moment');
const db = require('../models');
const User = db.user;


module.exports = (sequelize, Sequelize) => {
    const GuidedSellingQuestion = sequelize.define('guidedselling_question', {
        guidedselling_questions_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        account_id: {
            type: Sequelize.STRING,
            allowNull: false
        },
        opportunity_id: {
            type: Sequelize.STRING,
            allowNull: false
        },
        user_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'users', // Assuming 'users' is the name of the users table
                key: 'user_id'
            }
        },
        quote_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        template_type: {
            type: Sequelize.STRING,
            allowNull: false
        },
        section_key: {
            type: Sequelize.STRING,
            allowNull: false
        },
        question_key: {
            type: Sequelize.STRING,
            allowNull: false
        },
        question_count: {
            type: Sequelize.STRING,
            allowNull: false
        },
        question_name: {
            type: Sequelize.STRING,
            allowNull: true
        },
        parentSelect: {
            type: Sequelize.STRING,
            allowNull: true
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
        created_at: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
        },
        modified_at: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
        }
    }, {
        tableName: 'guidedselling_questions',
        timestamps: false, // If you want timestamps, change to true
        underscored: true // Use snake_case for automatically generated attributes
    });

    return GuidedSellingQuestion;
};
