'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Product.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'please input name'
        },
        notNull: {
          msg: 'name cannot empty/null'
        }
      }
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'please input image'
        },
        isUrl: {
          msg: 'please input image URL link'
        },
      }
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'please input price'
        },
        isNumeric: {
          msg: 'please input number'
        },
        isMinus(val) {
          if (val < 0) {
            throw new Error ('price must be greater than zero')
          }
        }
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'please input stock'
        },
        isInt: {
          msg: 'please input number'
        },
       
        isMinus(val) {
          if (val < 0) {
            throw new Error ('stock must be greater than zero')
          }
        }
      }
    },
    userId: DataTypes.INTEGER,
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'please input category'
        },
      }
    }
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};