const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class User extends Model { }

User.init(
    {
        // columns defined
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
    sequelize,
    timestamps: false,
    freezeTableName: true, //uses singular table name instead of changing it to "Categorys"
    underscored: true, //sets field option on all attributes to snacke_case version of its name
    modelName: 'user'
});

module.exports = User;