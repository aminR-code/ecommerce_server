'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Banners extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Banners.belongsTo(models.User, { foreignKey: 'userId' })
    }
  };
  Banners.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'please input title'
        }
      }
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'please input status'
        }
      }
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'please input image url'
        },
        isUrl: {
          msg: 'please input image url format'
        }
      }
    },
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Banners',
  });
  return Banners;
};