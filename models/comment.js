const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Comment extends Model { }

Comment.init(
    {
        // columns defined
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        comment: {
            type: DataTypes.STRING,
            allowNull: false
        },

        blog_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'blog',
                key: 'id',
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'user',
                    key: 'id',
                }
            },
        },
    }, {
    sequelize,
    timestamps: false,
    freezeTableName: true, //uses singular table name instead of changing it to "Categorys"
    underscored: true, //sets field option on all attributes to snacke_case version of its name
    modelName: 'comment'
});

module.exports = Comment;