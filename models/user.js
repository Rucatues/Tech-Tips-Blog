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
            validate: {
                len: [10],
            },
        }
    }, {
    hooks: {
        // Use the beforeCreate hook to work with data before a new instance is created
        beforeCreate: async (newUserData) => {
            // taking the user's email address, and making all letters lower case before adding it to the database.
            newUserData.email = await newUserData.email.toLowerCase();
            return newUserData;
        },
        // make all of the characters lower case in an updated email address, before updating the database.
        beforeUpdate: async (updatedUserData) => {
            updatedUserData.email = await updatedUserData.email.toLowerCase();
            return updatedUserData;
        },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true, //uses singular table name instead of changing it to "Categorys"
    underscored: true, //sets field option on all attributes to snacke_case version of its name
    modelName: 'user'
});

module.exports = User;