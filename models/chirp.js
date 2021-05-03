const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Chirp extends Model {}

Chirp.init(
    {
        text: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        createdAt:{
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updatedAt:{
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        likeTotal: {
            type: DataTypes.INTEGER, 
        }
    },
    {
        sequelize
    }
);

module.exports = Chirp;