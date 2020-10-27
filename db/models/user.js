'use strict';
const bcrypt = required('bcryptjs');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userZip: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    userEmail: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
    },
    avatar: DataTypes.STRING
  }, {});
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Review, { foreignKey: 'userId', onDelete: 'CASCADE', hooks: true });

  };

  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };

  return User;
};