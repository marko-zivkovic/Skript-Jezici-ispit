'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Filmovi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Kategorija, {foreignKey: 'kategorija_id'})
      this.hasMany(models.Karte, {foreignKey: 'film_id'})
      this.hasMany(models.Repertoar_stavke, {foreignKey: 'film_id'})

    }
  }
  Filmovi.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    reziser: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    datum: {
      type:DataTypes.DATEONLY,
      allowNull: false,
      unique: false,
    },
    trajanje: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    kategorija_id: {
      type:DataTypes.INTEGER
    },
  }, {
      tableName: 'filmovi',
      sequelize,
    modelName: 'Filmovi',
  });
  return Filmovi;
};