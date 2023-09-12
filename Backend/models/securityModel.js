const moment = require('moment');
const db = require('../models');
const User = db.user;

module.exports = (sequelize, Sequelize) => {
    const Security = sequelize.define("security",{
        role_id : {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        role: {
            type: Sequelize.STRING,
        },
        description : {
            type: Sequelize.STRING,
        },
        account: {
            type: Sequelize.STRING,
        }, 
        opportunity: {
            type: Sequelize.STRING,
        },
        opportunity_stage: {
            type: Sequelize.STRING,
        },
        opportunity_survey: {
            type: Sequelize.STRING,
        },
        quote :{
            type: Sequelize.STRING,
        },
        quote_add :{
            type: Sequelize.STRING,
        },
        quote_approval : {
            type: Sequelize.STRING,
        },
        quote_guideselling_answer : {
            type: Sequelize.STRING,
        },
        quote_guideselling_design : {
            type: Sequelize.STRING,
        },
        quote_listing : {
            type: Sequelize.STRING,
        },
        project : {
            type: Sequelize.STRING,
        },
        demand_workbench : {
            type: Sequelize.STRING,
        },
        demand_utilization : {
            type: Sequelize.STRING,
        },
        demand_people : {
            type: Sequelize.STRING,
        },
        demand_people_listing : {
            type: Sequelize.STRING,
        },
        forecast : {
            type: Sequelize.STRING,
        },
        forecast_update : {
            type: Sequelize.STRING,
        },
        catalog : {
            type: Sequelize.STRING,                   
        },
        catalog_roles : {
            type: Sequelize.STRING,                   
        },
        catalog_ratecard : {
            type: Sequelize.STRING,                   
        },
        catalog_ratecard_config : {
            type: Sequelize.STRING,                   
        },
        catalog_exchange : {
            type: Sequelize.STRING,                   
        },
        catalog_items : {
            type: Sequelize.STRING,                   
        },
        catalog_content : {
            type: Sequelize.STRING,                   
        },
        catalog_assets : {
            type: Sequelize.STRING,                   
        },
        catalog_catalog : {
            type: Sequelize.STRING,                   
        },
        catalog_surevys : {
            type: Sequelize.STRING,                   
        },
        catalog_surevys_whereused : {
            type: Sequelize.STRING,                   
        },
        catalog_doctypes : {
            type: Sequelize.STRING,                   
        },
        notes : {
            type: Sequelize.STRING,
        },
        files : {
            type: Sequelize.STRING,
        },
        admin : {
            type: Sequelize.STRING,
        },
        admin_admin : {
            type: Sequelize.STRING,
        },
        admin_people : {
            type: Sequelize.STRING,
        },
        admin_access : {
            type: Sequelize.STRING,
        },
        admin_config : {
            type: Sequelize.STRING,
        },
        admin_lookups : {
            type: Sequelize.STRING,
        },
        admin_security : {
            type: Sequelize.STRING,
        },
        admin_alerts : {
            type: Sequelize.STRING,
        },
        admin_imports : {
            type: Sequelize.STRING,
        },
        admin_hooks_status : {
            type: Sequelize.STRING,
        },
        admin_hooks_config : {
            type: Sequelize.STRING,
        },
    });

    return Security;
}