const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')

// dependencia a la conexion 
const connectDB = require('./config/db')

//dependecias a la rutas 
const bootcampRoutes = require('./routes/BootcampsRoutes')
const userRoutes = require('./routes/userRoutes')
// establecer el archivo de confi 
// con variables de entorno de proyecto
dotenv.config({
    path: './config_env/config.env'
})


// 1 Crear el objeto app
const app = express()

// ejecutar la conexion

connectDB()

// 2 crear una ruta de prueba
app.use('/api/v1/bootcamps' , bootcampRoutes)
app.use('/api/v1/users' , userRoutes)


// 3 Ejecutar servidor de desarrolo de express

app.listen(process.env.PORT , ()=>{
    console.log(`Servidor iniciado en puerto: ${process.env.PORT}`.bgGreen.red);
})