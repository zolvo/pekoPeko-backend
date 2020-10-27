'use strict';
const moment = require('moment');
module.exports = (sequelize, DataTypes) => {
  const Reviews = sequelize.define('Reviews', {
    rating: DataTypes.INTEGER,
    reviewText: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    businessId: DataTypes.INTEGER,
    createdAt: {
      type: DataTypes.DATE,
      get() {
        return moment(this.getDataValue('createdAt')).format('DD/MM/YYY hh:mm:ss');
      }
    },
    updatedAt: {
      type: DataTypes.DATE,
      get() {
        return moment(this.getDataValue('updatedAt')).format('DD/MM/YYYY h:mm:ss');
      }
    }
  }, {});
  Reviews.associate = function (models) {
    // associations can be defined here
    Reviews.belongsTo(models.User, { foreignKey: 'userId' });
    Reviews.belongsTo(models.Business, { foreignKey: 'businessId', onDelete: 'CASCADE', hooks: true });
  };
  return Reviews;
};
