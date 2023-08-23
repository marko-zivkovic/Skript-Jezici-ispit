'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Repertoar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Repertoar.init({
    name: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    pocetak: {
      type:DataTypes.DATEONLY,
      allowNull: false,
      unique: false,
    },
    kraj: {
      type:DataTypes.DATEONLY,
      allowNull: false,
      unique: false,
    },
  }, {
    tableName: 'repertoari',
    sequelize,
    modelName: 'Repertoar',
  });
  return Repertoar;
};