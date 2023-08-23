'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sale extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Bioskop, {foreignKey: 'bioskop_id'})
      this.hasMany(models.Repertoar_stavke, {foreignKey: 'sala_id'})
    }
  }
  Sale.init({
    naziv: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    kapacitet: {
      type:DataTypes.INTEGER,
      allowNull: false,
      unique: false,
    },
    redovi: {
      type:DataTypes.INTEGER,
      allowNull: false,
      unique: false,
    },
    bioskop_id: {
      type:DataTypes.INTEGER,
    },
    opis: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: false,},
  }, {
    tableName: 'sale',
    sequelize,
    modelName: 'Sale',
  });
  return Sale;
};