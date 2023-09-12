const moment= require('moment')
module.exports = (sequelize, Sequelize) => {
  const Lookups = sequelize.define("lookups", {
    lookups_id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id:{
        type: Sequelize.INTEGER,
        foreignKey: true,
    },
    lookups_accesskey: {
        type: Sequelize.STRING,
        unique:true
    },
    class_name: {
        type: Sequelize.STRING,
        unique:true
    },
    parent_lookups_key: {
        type: Sequelize.STRING,
    },
    lookups_status: {
        type: Sequelize.INTEGER,
        default:0
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

  return Lookups;
};
