const moment = require('moment');
const db = require('../models');

module.exports = (sequelize, Sequelize) => {
  const Section = sequelize.define("section", {
    section_id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    section_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    section_tag: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    id: {
      type: Sequelize.STRING,
      allowNUll: false,
    }
  })

  const Doctype = sequelize.define("doctype", {
    doc_id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    doc_name: {
      type: Sequelize.STRING
    },
    category: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.STRING
    },
    purpose: {
      type: Sequelize.STRING
    },
    template_file: {
      type: Sequelize.STRING
    },
    paper_size: {
      type: Sequelize.STRING
    },
    watermark_file: {
      type: Sequelize.STRING
    },
    watermark: {
      type: Sequelize.STRING
    },
    toc: {
      type: Sequelize.STRING
    },
  });

  Doctype.hasMany(Section, { foreignKey: 'doc_id', onDelete: 'CASCADE' });
  Section.belongsTo(Doctype, { foreignKey: 'doc_id' });
  
  return {Doctype, Section};
}