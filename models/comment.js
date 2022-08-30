const sequelize =  require('sequelize');
const seqConnection = require('../config/seqConnection');

const Comment = seqConnection.define('comment',{

    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    content: {
        type: sequelize.TEXT,
        allowNull: false,
    },

    post_id: {
        type: sequelize.INTEGER,
        allowNull: false,
        reference: {
            model: 'Post',
            key: 'id'
          
        }
    },

    user_id: {
        type: sequelize.INTEGER,
        allowNull: false,
        reference: {
            model: 'User',
            key: 'id'
          
        }
    },

}, {
    sequelize: seqConnection,
    timestamps: true,
    freezeTableName: true,
    modelName: 'comments',
    underscored: true
});



module.exports = Comment;