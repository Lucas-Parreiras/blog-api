/* eslint-disable max-lines-per-function */
const UserModel = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
          },
          displayName: {
            allowNull: false,
            type: DataTypes.STRING,
          },
          email: {
            allowNull: false,
            type: DataTypes.STRING,
          },
          password: {
            allowNull: false,
            type: DataTypes.STRING,
          },
          image: {
            type: DataTypes.STRING,
          },
    }, {
        timestamp: false,
        underscored: true,
    });

    return User;
};

module.exports = UserModel;