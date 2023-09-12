const moment= require('moment')
module.exports = (sequelize, Sequelize) => {
  const Lookups_data = sequelize.define("lookups_data", {
    lookups_data_id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    lookups_data_accesskey: {
        type: Sequelize.STRING,
        unique:true
    },
    user_id:{
        type: Sequelize.INTEGER,
        foreignKey: true,
    },
    lookups_accesskey: {
        type: Sequelize.STRING,
    },
    lookups_name: {
        type: Sequelize.STRING,
        unique:true
    },
    code: {
        type: Sequelize.STRING,
    },
    value1: {
        type: Sequelize.STRING,
    },
    value2: {
        type: Sequelize.STRING,
    },
    disable: {
        type: Sequelize.INTEGER,
        default:0
    },
    parent_lookups_data: {
        type: Sequelize.STRING,
    },
    createdAt: {
      type: Sequelize.DATE,
      get(){
        return moment(this.getDataValue('createdAt')).format('DD-MM-YYYY h:m:ss')
      }
    },
    modifiedAt: {
      type: Sequelize.DATE,
      get(){
        return moment(this.getDataValue('modifiedAt')).format('DD-MM-YYYY h:m:ss')
      }
    },
  });

  return Lookups_data;
};
