"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Type_books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Books, Type_books }) {
      Type_books.hasMany(Books);
    }
  }
  Type_books.init(
    {
      id: { type: DataTypes.INTEGER(11), primaryKey: true },
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Type_books",
    }
  );
  return Type_books;
};
