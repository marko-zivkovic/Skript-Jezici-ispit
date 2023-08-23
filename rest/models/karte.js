'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Karte extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Filmovi, {foreignKey: 'film_id'})
      this.belongsTo(models.Korisnik, {foreignKey: 'korinisk_id'})
    }
  }
  Karte.init({
    cena: {
      type:DataTypes.INTEGER,
      allowNull: false,
      unique: false,
    },
    film_id: {
      type:DataTypes.INTEGER,
    },
    korisnik_id: {
      type:DataTypes.INTEGER
    },
  }, {
    tableName: 'karte',
    sequelize,
    modelName: 'Karte',
  });
  return Karte;
};