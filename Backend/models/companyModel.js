const moment = require('moment');
const db = require('../models');
const User = db.user;

module.exports = (sequelize, Sequelize) => {

    const Company = sequelize.define('company', {

        company_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          user_id: {
            type: Sequelize.INTEGER,
            allowNull: true
          },
          compony_key:{
            type: Sequelize.STRING,
            allowNull: true
          },
          logoUrl:{
            type: Sequelize.STRING,
            allowNull: true
          },
          company_name:{
            type: Sequelize.STRING,
            allowNull: true
          },
          language:{
            type: Sequelize.STRING,
            allowNull: true
          },
          user_authorization_domain:{
            type: Sequelize.STRING,
            allowNull: true
          },
          company_domain:{
            type: Sequelize.STRING,
            allowNull: true
          },
          first_name:{
            type: Sequelize.STRING,
            allowNull: true
          },
          last_name:{
            type: Sequelize.STRING,
            allowNull: true
          },
         phone:{
            type: Sequelize.STRING,
            allowNull: true
          },
          email:{
            type: Sequelize.STRING,
            allowNull: true
          },
          street:{
            type: Sequelize.STRING,
            allowNull: true
          },
          city:{
            type: Sequelize.STRING,
            allowNull: true
          },
          state:{
            type: Sequelize.STRING,
            allowNull: true
          },
          country:{
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
          }
    });
    return Company;
};