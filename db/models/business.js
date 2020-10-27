'use strict';
module.exports = (sequelize, DataTypes) => {
  const Business = sequelize.define('Business', {
    businessZip: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    businessName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    businessPhone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    businessAddress: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    businessEmail: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    businessWebsite: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    businessHours: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Business.associate = function (models) {
    // associations can be defined here
    Business.hasMany(models.Review, { foreignKey: 'businessId', onDelete: 'CASCADE', hooks: true });

  };
  return Business;
};
