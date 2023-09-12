const moment = require('moment');
const db = require('../models');
const User = db.user;

module.exports = (sequelize, Sequelize) => {
    const surveySection = sequelize.define("surveySection", {
        survey_section_id: {
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
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'users', // Assuming 'users' is the name of the users table
                key: 'user_id'
            }
        },
        survey_section_number: {
            type: Sequelize.STRING,
            allowNull: false
        },
        survey_section_title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        survey_section_status: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0
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
    }, {
        indexes: [
            {
                name: 'survey_key_index',
                fields: ['survey_key']
            },
            {
                name: 'user_id_index',
                fields: ['user_id']
            }
        ]
    });

    return surveySection;
};
