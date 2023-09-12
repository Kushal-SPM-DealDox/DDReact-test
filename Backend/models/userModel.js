const moment = require('moment')
module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    user_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    full_name: {
      type: Sequelize.STRING
    },
    phone_number: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING
    },
    createdAt: {
      type: Sequelize.DATE,
      get() {
        return moment(this.getDataValue('createdAt')).format('DD-MM-YYYY h:m:ss')
      }
    },
    modifiedAt: {
      type: Sequelize.DATE,
      get() {
        return moment(this.getDataValue('modifiedAt')).format('DD-MM-YYYY h:m:ss')
      }
    },
  });

  return User;
};
