'use strict';
const moment = require('moment');
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
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
  Review.associate = function (models) {
    // associations can be defined here
    Review.belongsTo(models.User, { foreignKey: 'userId' });
    Review.belongsTo(models.Business, { foreignKey: 'businessId', onDelete: 'CASCADE', hooks: true });
  };
  return Review;
};
