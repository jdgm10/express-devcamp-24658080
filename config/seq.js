const Sequelize = require('sequelize')

//Definir objeto sequelize de conexion 
const sequelize = new Sequelize(
    'devcamp-2465880',
    'root',
    '',
    {
        host:'localhost',
        port: '3307',
        dialect: 'mysql'
    }
)

module.exports = sequelize