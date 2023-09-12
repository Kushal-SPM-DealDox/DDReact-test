const moment = require('moment');
const db = require('../models');
const User = db.user;

module.exports = (sequelize,Sequelize) => {
    const Content =sequelize.define('content',{
        content_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          user_id: {
            type: Sequelize.INTEGER,
            allowNull: true
          },
          content_key: {
            type: Sequelize.STRING,
          },
          content_name: {
            type: Sequelize.STRING(150)
          },
          sales_org: {
            type: Sequelize.STRING(150)
          },
          catalog_number: {
            type: Sequelize.INTEGER
          },
          catalog_category: {
            type: Sequelize.STRING(150)
          },
          locked: {
            type: Sequelize.BOOLEAN
          },
          content: {
            type: Sequelize.STRING(45000)
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
    return Content;
}