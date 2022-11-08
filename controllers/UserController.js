const sequelize = require('../config/seq')
const { DataTypes, ValidationError } = require ('sequelize')
const UserModel = require('../models/user')
const user = require('../models/user')


//objeto usuario

const User = UserModel(sequelize,DataTypes)


//get: obtener datos R
exports.getAllUsers = async (request, response)=>{
    try {
        const traerusers = await User.findAll();
    response.status(200).json(
        {
           "succes" : true,
           "data" : traerusers
        }
    )
    } catch (error) {
        if( error instanceof ValidationError){
            //Llevar errores a response
          // mensajes de error
           const errores =error.errors.map((e)=> e.message) 
           response.status(422)
               .json({
                  "success": false,
                  "errors": errores
               })
       }else{
           // error de servidor
           response.status(500)
           .json({
              "success": false,
              "errors": "error de servidor"
           }) 
       }  
    }   
    }

 // obtner recursos po id

exports.getSingleUsers = async (request, response)=>{
   try {
    const userid= await User.findByPk(request.params.id)
    
    if (!userid) {
        response.status(422).json(
            {
                "succes" : true,
               "errors" : [
                "usuario no existe"
               ]
            }
        )
    }
    else {response.status(200).json(
        {
            "succes" : true,
           "data" : userid
        }
    )}
   } catch (error) {
    if( error instanceof ValidationError){
        //Llevar errores a response
      // mensajes de error
       const errores =error.errors.map((e)=> e.message) 
       response.status(422)
           .json({
              "success": false,
              "errors": errores
           })
   }else{
       // error de servidor
       response.status(500)
       .json({
          "success": false,
          "errors": "error de servidor"
       }) 
   }  
   } 
}

// metodo post: crear un nuevo recurso

exports.postUsers = async (request, response)=>{
    try {
        const newusers = await User.create(request.body);
        response.status(201).json({
            "success" : true,
            "data" : newusers
        })
    } catch (error) {
if( error instanceof ValidationError){
     //Llevar errores a response
   // mensajes de error
    const errores =error.errors.map((e)=> e.message) 
    response.status(422)
        .json({
           "success": false,
           "errors": errores
        })
}else{
    // error de servidor
    response.status(500)
    .json({
       "success": false,
       "errors": "error de servidor"
    }) 
}
   
   
        
    }
   
}

//Put - Patch: actualizar
exports.putUsers = async (request, response)=>{
  try {
    const upUser = await User.findByPk(request.params.id)
    if (!upUser) {
        //Error
        response.status(422).json(
            {
                "succes" : true,
               "errors" : [
                "usuario no existe"
               ]
            }
        )
    } else {
        await User.update(  request.body, { where: {
            id: request.params.id 
        } 
    });
    const userAct = await User.findByPk(request.params.id)
    response.status(200).json(
        {
           "succes" : true,
           "data" :userAct
        })
    }
  } catch (error) {
    if( error instanceof ValidationError){
            //Llevar errores a response
          // mensajes de error
           const errores =error.errors.map((e)=> e.message) 
           response.status(422)
               .json({
                  "success": false,
                  "errors": errores
               })
       }else{
           // error de servidor
           response.status(500)
           .json({
              "success": false,
              "errors": "error de servidor"
           }) 
       } 
  }   
    //consutae datoas actualizados 


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

