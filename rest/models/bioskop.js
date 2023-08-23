'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, Sequelize) => {
  class Bioskop extends Model {
    static associate(models) {
      this.hasMany(models.Lokacija, {foreignKey: 'bioskop_id'})
      this.hasMany(models.Sale, {foreignKey: 'bioskop_id'})
    }
  }
  Bioskop.init({
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      grad: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
    }, {
      tableName: 'bioskopi',
    sequelize,
    modelName: 'Bioskop',
  });
  return Bioskop;
};
