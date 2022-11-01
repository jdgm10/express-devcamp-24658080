const sequelize = require('../config/seq')
const { DataTypes } = require ('sequelize')
const UserModel = require('../models/user')
const user = require('../models/user')


//objeto usuario

const User = UserModel(sequelize,DataTypes)


//get: obtener datos R
exports.getAllUsers = async (request, response)=>{
    const traerusers = await User.findAll();
    response.status(200).json(
        {
           "succes" : true,
           "data" : traerusers
        }
    )
    }

 // obtner recursos po id

exports.getSingleUsers = async (request, response)=>{
    const userid= await User.findByPk(request.params.id)
    response.status(200).json(
        {
            "succes" : true,
           "data" : userid
        }
    )
}

// metodo post: crear un nuevo recurso

exports.postUsers = async (request, response)=>{
    const newusers = await User.create(request.body);
    response.status(201).json({
        "success" : true,
        "data" : newusers
    })
}

//Put - Patch: actualizar
exports.putUsers = async (request, response)=>{
    await User.update( request.body, { where: {
        id: request.params.id
    }});
    //consutae datoas actualizados 

    const updateuser = await User.findByPk(request.params.id)

    response.status(200).json(
        {
            "succes": true,
            "data" : updateuser
        }
    )
}

//Delete
exports.deleteUsers = async (request, response)=>{
    const deleteUser= await User.destroy({
        where: {
          id: request.params.id
        }
      })

    response.status(200).json(
        {
            "succes": true,
            "data" : deleteUser
          
        }
    )}

