'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lokacija extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Bioskop, {foreignKey: 'bioskop_id'})
    }
  }
  Lokacija.init({
    adresa: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    bioskop_id: {type:DataTypes.INTEGER},
  }, {
    tableName: 'lokacije',
    sequelize,
    modelName: 'Lokacija',
  });
  return Lokacija;
};