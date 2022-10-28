const sequelize = require('./seq')

const colors = require('colors')

// crear modelo


//Crear funcion asyncorna para la conexion
const connectDB = async ()=>{
    try{
    await sequelize.authenticate()
    console.log('Conexion establecida exitosamente'.bgYellow.red);
    }catch(error){
        console.error(error);
    }
    
}

//Ejecutar la conexion

module.exports = connectDB

  //Seleccionar los user que alla hasta el momento:

    // const Juan = await user.create({ name: "Juan Petulio", email: "Doe@gmail.com", password: "3213" })
    // console.log("Id :" , Juan.id);
    // const users = await user.findAll();
    // console.log(users);