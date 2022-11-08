'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlpha:{
          args: true,
          msg: ' son letras'
        }, 
        notEmpty:{
          args: true,
          msg: ' no envie capos vacios'
        },
        notNull: {
          args: true,
          msg: ' no tiene el name'
        },
      } 
    } ,
    email:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        notEmpty:{
          args: true,
          msg: ' no envie capos vacios'
        },
        notNull: {
          args: true,
          msg: ' no tiene el name'
        },
        isEmail: {
          args: true,
          msg: 'email tiene que ser valido'
        }
      }
    } ,
    password: {
       type: DataTypes.STRING,
       allowNull: false,
       unique: true,
       validate: {
        notEmpty:{
          args: true,
          msg: ' no envie capos vacios'
        },
        notNull: {
          args: true,
          msg: ' no tiene el name'
        },
        len:{ args: [5,10],
          msg: 'La contraseña no apta por la catidad de caracteres'
        },
       }
    }
  }, {
    sequelize,
    modelName: 'User',
    timestamps: false
  });
  return User;
};