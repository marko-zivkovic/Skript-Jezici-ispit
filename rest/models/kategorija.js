'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kategorija extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Filmovi, {foreignKey: 'kategorija_id'})
    }
  }
  Kategorija.init({
    name: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
  }, {
    tableName: 'kategorije',
    sequelize,
    modelName: 'Kategorija',
  });
  return Kategorija;
};