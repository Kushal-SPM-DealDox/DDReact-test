const moment = require('moment');
const db = require('../models');
const User = db.user;


module.exports = (sequelize, Sequelize) => {
    const surveyAction = sequelize.define("surveyAction", {
        survey_action_id: {
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
        survey_questions_key: {
            type: Sequelize.STRING,
            allowNull: false
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
        survey_action_number: {
            type: Sequelize.STRING,
            allowNull: false
        },
        survey_action_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        survey_actions_sections: {
            type: Sequelize.STRING,
            allowNull: false
        },
        createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            get() {
                return moment(this.getDataValue('createdAt')).format('DD-MM-YYYY h:m:ss');
            }
        },
        modifiedAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            get() {
                return moment(this.getDataValue('modifiedAt')).format('DD-MM-YYYY h:m:ss');
            }
        },
    });

    return surveyAction;
};
