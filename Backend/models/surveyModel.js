const moment = require('moment');
const db = require('../models');
const User = db.user;

module.exports = (sequelize, Sequelize) => {
    const survey = sequelize.define("survey", {
        survey_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        survey_key: {
            type: Sequelize.STRING,
            unique: true
        },
        user_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'users', // Assuming 'users' is the name of the users table
                key: 'user_id'
            }
        },
        title: {
            type: Sequelize.STRING,
            allowNull: true
        },
        category: {
            type: Sequelize.STRING,
            allowNull: true
        },
        status: {
            type: Sequelize.STRING,
            allowNull: true
        },
        globals: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        },
        wide: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        },
        update_type: {
            type: Sequelize.STRING,
            allowNull: true
        },
        createdAt: {
            type: Sequelize.DATE,
            get() {
                return moment(this.getDataValue('createdAt')).format('DD-MM-YYYY h:m:ss');
            }
        },
        modifiedAt: {
            type: Sequelize.DATE,
            get() {
                return moment(this.getDataValue('modifiedAt')).format('DD-MM-YYYY h:m:ss');
            }
        },
    });

    return survey;
};
