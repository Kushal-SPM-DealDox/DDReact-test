const moment = require('moment');
const db = require('../models');
const User = db.user;

module.exports = (sequelize,Sequelize) => {
    const config =sequelize.define('config',{
        config_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          user_id: {
            type: Sequelize.INTEGER,
            allowNull: true
          },
          
          config_key: {
            type: Sequelize.STRING,
            allowNull: true
          },
          value1:{
            type: Sequelize.STRING,
            allowNull: true
          },
          value2:{
            type: Sequelize.STRING,
            allowNull: true
          },
          value3:{
            type: Sequelize.STRING,
            allowNull: true
          },
          value4:{
            type: Sequelize.STRING,
            allowNull: true
          },
          value5:{
            type: Sequelize.STRING,
            allowNull: true
          },
          value6:{
            type: Sequelize.STRING,
            allowNull: true
          },
          value7:{
            type: Sequelize.STRING,
            allowNull: true
          },
          value8:{
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
    })
    return config;
}