const moment = require('moment');
const db = require('../models');
const User = db.user;

module.exports = (sequelize, Sequelize) => {
    const GuidedSellingSection = sequelize.define('guidedselling_sections', {
        guidedselling_sections_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        account_id: {
            type: Sequelize.STRING,
            allowNull: false
        },
        opportunity_id: {
            type: Sequelize.STRING,
            allowNull: false
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'users', // Replace with the actual table name if needed
                key: 'user_id'
            }
        },
        quote_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        template_type: {
            type: Sequelize.STRING,
            allowNull: false
        },
        section_key: {
            type: Sequelize.STRING,
            allowNull: false
        },
        section_count: {
            type: Sequelize.STRING,
            allowNull: false
        },
        section_name: {
            type: Sequelize.STRING(300),
            allowNull: false
        },
        created_at: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        modified_at: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        }
    }, {
        tableName: 'guidedselling_sections',
        indexes: [
            {
                name: 'PRIMARY',
                unique: true,
                using: 'BTREE',
                fields: ['guidedselling_sections_id']
            }
        ]
    });

    return GuidedSellingSection;
};

