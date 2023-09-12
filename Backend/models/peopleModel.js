const moment = require('moment');
const db = require('../models');
const User = db.user;

module.exports = (sequelize, Sequelize) => {
    
    const People = sequelize.define("people",{
        admin_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        }, 
        first_name: {
            type: Sequelize.STRING,
            required: true,
        },
        last_name: {
            type: Sequelize.STRING,
            required: true,
        },
        title: {
            type: Sequelize.STRING,
        },
        uid: {
            type: Sequelize.STRING,
        },
        emp_id: {
            type: Sequelize.STRING,
        },
        emp_reference_id: {
            type: Sequelize.STRING,
        },
        start_date: {
            type: Sequelize.STRING,
        },
        end_date: {
            type: Sequelize.STRING,
        },
        email: {
            type: Sequelize.STRING,
            required: true,
        },
        phone: {
            type: Sequelize.STRING,
        },
        source_system_user_name: {
            type: Sequelize.STRING,
        },
        city: {
            type: Sequelize.STRING,
        },
        region: {
            type: Sequelize.STRING,
        },
        country: {
            type: Sequelize.STRING,
        },
        practice: {
            type: Sequelize.STRING,
        },
        org: {
            type: Sequelize.STRING,
        },
        manager: {
            type: Sequelize.STRING,
        },
        exp_yr: {
            type: Sequelize.STRING,
        },
        tenure: {
            type: Sequelize.STRING,
        },
        crm_status: {
            type: Sequelize.STRING,
        },
        contractor: {
            type: Sequelize.BOOLEAN,
        },
        supplier: {
            type: Sequelize.STRING,
        },
        currency: {
            type: Sequelize.STRING,
        },
        cost_per_hour: {
            type: Sequelize.INTEGER,
        },
        week_hour: {
            type: Sequelize.INTEGER,
            required: true,
        },
        access: {
            type: Sequelize.STRING,   
        },
        catalog_role:{
            type: Sequelize.STRING,
        },
    });
    return People;
};