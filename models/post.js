const sequelize =  require('sequelize');
const seqConnection = require('../config/seqConnection');


const Post = seqConnection.define('post',{

    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    title: {
        type: sequelize.STRING,
        allowNull: false,

    },

    content: {
        type: sequelize.TEXT,
        allowNull: false,
    },

    user_id: {
        type: sequelize.INTEGER,
        allowNull: false,
        reference: {
            model: 'User',
            key: 'id'
          
        }
    }



}, {
    sequelize: seqConnection,
    timestamps: true,
    freezeTableName: true,
    modelName: 'posts',
    underscored: true
});


module.exports = Post;