"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Orders, Users, Books }) {
      Orders.belongsTo(Users);
      Orders.belongsTo(Books);
    }
  }
  Orders.init(
    {
      id: {
        type: DataTypes.INTEGER(11),
        autoIncrement: true,
        primaryKey: true,
      },
      userId: DataTypes.INTEGER(11),
      bookId: DataTypes.INTEGER(11),
      orderAt: DataTypes.DATEONLY,
      qty: DataTypes.INTEGER(11),
    },
    {
      sequelize,
      modelName: "Orders",
    }
  );
  return Orders;
};
