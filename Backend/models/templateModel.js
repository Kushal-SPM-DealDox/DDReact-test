const moment = require('moment');
const db = require('../models');
const User = db.user;

module.exports = (sequelize, Sequelize) => {
    const Template = sequelize.define("template", {
        template_id: {
            type: Sequelize.STRING,
            primaryKey: true,
        },
        quote_name: {
            type: Sequelize.STRING,
            //required: true,
        },
        doctypeData : {
            type : Sequelize.STRING,
        }
    });
    return Template;
}