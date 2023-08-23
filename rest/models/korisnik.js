'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Korisnik extends Model {
    static associate(models) {
      this.hasMany(models.Karte, {foreignKey: 'korinsik_id'})
    }
  }
  Korisnik.init({
    name: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    username: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    email: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    password: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    role: {
      type:DataTypes.STRING
    },
  }, {
    tableName: 'korisnici',
    sequelize,
    modelName: 'Korisnik',
  });
  return Korisnik;
};