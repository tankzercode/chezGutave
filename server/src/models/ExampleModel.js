const { DataTypes } = require('sequelize');
const database = require('../database');

const Example = database.define('Example', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    text: {
        type: DataTypes.STRING,
        defaultValue: 'Example'
    }
});

module.exports = Example;