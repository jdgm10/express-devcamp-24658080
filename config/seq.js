const Sequelize = require('sequelize')
const dotenv = require('dotenv')

dotenv.config({
    path: './config_env/config.env'
})

// console.log(process.env.DB_NAME);

//Definir objeto sequelize de conexion 
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_MOTOR
    }
)

module.exports = sequelize