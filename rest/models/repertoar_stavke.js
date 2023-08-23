'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Repertoar_stavke extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Filmovi, {foreignKey: 'film_id'})
      this.hasMany(models.Sale, {foreignKey: 'sala_id'})
    }
  }
  Repertoar_stavke.init({
    repertoar_id: {type:DataTypes.INTEGER,},
    film_id: {type:DataTypes.INTEGER,},
    sala_id: {type:DataTypes.INTEGER,},
  }, {
    tableName: 'repertoar_stavke',
    sequelize,
    modelName: 'Repertoar_stavke',
  });
  return Repertoar_stavke;
};