const sequelize =  require('sequelize');
const seqConnection = require('../config/seqConnection');
const bcrypt = require('bcrypt');

const User = seqConnection.define('user',{

    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    username: {
        type: sequelize.STRING,
        allowNull: false,
        validate: {
            len: [5, 30],
        }
    },

    password: {
        type: sequelize.STRING,
        allowNull: false,
        validate: {
            len: [5, 60]
        }
    }

}, {
    sequelize: seqConnection,
    timestamps: false,
    freezeTableName: true,
    modelName: 'users',
    underscored: true
});

User.beforeCreate(async user => {
    user.password = await bcrypt.hash(user.password, 10);
})


module.exports = User;