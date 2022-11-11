'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Reviews.init({
    title: {
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        is: {
          args: /^[a-zA-Z ]+$/i,
          msg: "Valores solo válidos en letras"
        },
        notEmpty: {
          args: true,
          msg: "El campo no debe de quedar vacío"
        },
        notNull: {
          args: true,
          msg: "El campo no debe de quedar vacío"
        },
      }
    },
    text:{
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        is: {
          args: /^[a-zA-Z ]+$/i,
          msg: "Valores solo válidos en letras"
        },
        notEmpty: {
          args: true,
          msg: "El campo no debe de quedar vacío"
        },
        notNull: {
          args: true,
          msg: "El campo no debe de quedar vacío"
        }, 
      }
    },
    rating: {
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        min:  {
          args: 1,
          msg: "Calificación de 1 a 10"
        },
        max:  {
          args: 10,
          msg: "Calificación de 1 a 10"
        },
        notEmpty: {
          args: true,
          msg: "El campo no debe de quedar vacío"
        },
        notNull: {
          args: true,
          msg: "El campo no debe de quedar vacío"
        }, 
      }
    },
    bootcamp_id: {
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: {
          args: true,
          msg: "El campo no debe de quedar vacío"
        },
        notNull: {
          args: true,
          msg: "El campo no debe de quedar vacío"
        }, 
      }
    },
    user_id: {
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
      
        notEmpty: {
          args: true,
          msg: "El campo no debe de quedar vacío"
        },
        notNull: {
          args: true,
          msg: "El campo no debe de quedar vacío"
        }, 
      }
    }
  }, {
    sequelize,
    modelName: 'Reviews',
    timestamps: false
  });
  return Reviews;
};