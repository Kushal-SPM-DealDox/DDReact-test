const moment = require('moment');
const db = require('../models');
const User = db.user;

module.exports = (sequelize, Sequelize) => {
  const Opportunities = sequelize.define('opportunity', {
    opportunity_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    account_key:{
       type: Sequelize.STRING,
       allowNull: true
    },
    opportunity_name: {
      type: Sequelize.STRING
    },
    net_price: {
      type: Sequelize.STRING
    },
    margin: {
      type: Sequelize.STRING
    },
    cost: {
      type: Sequelize.INTEGER
    },
    stage: {
      type: Sequelize.STRING
    },
    probability: {
      type: Sequelize.STRING
    },
    hours: {
      type: Sequelize.STRING
    },
    close: {
      type: Sequelize.DATE
    },
    start: {
      type: Sequelize.DATE
    },
    duration_weeks: {
      type: Sequelize.INTEGER
    },
    owner: {
      type: Sequelize.STRING
    },
    region: {
      type: Sequelize.STRING(150),
      allowNull: true
    },
    vertical: {
      type: Sequelize.STRING(150),
      allowNull: true
    },
    practice: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    currency: {
      type: Sequelize.STRING,
      allowNull: true
    },
    org: {
      type: Sequelize.STRING,
      allowNull: true
    },
    opportunity_type: {
      type: Sequelize.STRING(300),
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

  // User.hasMany(Accounts, { foreignKey: 'user_id' });
  // Accounts.belongsTo(User, { foreignKey: 'user_id' });

  return Opportunities;
};
