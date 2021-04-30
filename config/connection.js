require('dotenv').config();

const Sequelize = require('sequelize');
console.log(process.env.DB_USERNAME);

const sequelize  = new Sequelize('chirpapp', process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: 3306,
    dialect: 'mysql'
});



module.exports = sequelize;