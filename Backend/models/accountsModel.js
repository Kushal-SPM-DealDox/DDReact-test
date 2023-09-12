const moment = require('moment');
const db = require('../models');
const User = db.user;

module.exports = (sequelize, Sequelize) => {
  const Accounts = sequelize.define('accounts', {
    account_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    account_key: {
      type: Sequelize.STRING
    },
    accounts: {
      type: Sequelize.STRING
    },
    owner: {
      type: Sequelize.STRING
    },
    parent_account: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    region: {
      type: Sequelize.STRING
    },
    industry: {
      type: Sequelize.STRING
    },
    vertical: {
      type: Sequelize.STRING
    },
    type: {
      type: Sequelize.STRING
    },
    billing_street1: {
      type: Sequelize.STRING
    },
    billing_street2: {
      type: Sequelize.STRING
    },
    billing_city: {
      type: Sequelize.STRING
    },
    billing_state: {
      type: Sequelize.STRING(150),
      allowNull: true
    },
    billing_zip: {
      type: Sequelize.INTEGER(10),
      allowNull: true
    },
    billing_country: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    billing_phone: {
      type: Sequelize.BIGINT(12),
      allowNull: true
    },
    shipping_street1: {
      type: Sequelize.STRING(300),
      allowNull: true
    },
    shipping_street2: {
      type: Sequelize.STRING(300),
      allowNull: true
    },
    shipping_city: {
      type: Sequelize.STRING(150),
      allowNull: true
    },
    shipping_state: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    shipping_zip: {
      type: Sequelize.INTEGER(10),
      allowNull: true
    },
    shipping_country: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    shipping_phone: {
      type: Sequelize.BIGINT(15),
      allowNull: true
    },
    excelrate_partner: {
      type: Sequelize.STRING(150),
      allowNull: true
    },
    commercial_region: {
      type: Sequelize.STRING,
      allowNull: true
    },
    commercial_subregion: {
      type: Sequelize.STRING,
      allowNull: true
    },
    vat_number: {
      type: Sequelize.STRING(150),
      allowNull: true
    },
    delivery_area: {
      type: Sequelize.STRING(300),
      allowNull: true
    },
    access_key: {
      type: Sequelize.STRING(155),
      allowNull: true,
      unique: true
    },
    notes: {
      type: Sequelize.STRING(400),
      allowNull: true
    },
    external_references_id1: {
      type: Sequelize.STRING,
      allowNull: true
    },
    external_references_id2: {
      type: Sequelize.STRING,
      allowNull: true
    },
    crm_reference: {
      type: Sequelize.STRING,
      allowNull: true
    },
    file_path: {
      type: Sequelize.TEXT,
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

  return Accounts;
};
