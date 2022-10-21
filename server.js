const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
//dependecias a la rutas 
const bootcampRoutes = require('./routes/BootcampsRoutes')
// establecer el archivo de confi 
// con variables de entorno de proyecto
dotenv.config({
    path: './config_env/config.env'
})


// 1 Crear el objeto app
const app = express()

// 2 crear una ruta de prueba
app.use('api/v1/bootcamps' , bootcampRoutes)



// 2 crear una ruta (endpoint,uri) para los bootscamp
//get: obtener datos R
app.get('/api/v1/bootcamps', (request, response)=>{
response.status(200).json(
    {
        "message": "aqui se va a mostar todo los bootcamps"
    }
)
})

// // obtner recursos po id

app.get('/api/v1/bootcamps/:id' , (request, response)=>{
    response.status(200).json(
        {
            "message": `aqui se va a mostar el bootcamps cuyo id es ${request.params.id}`
        }
    )
})

// metodo post: crear un nuevo recurso

app.post('/api/v1/bootcamps', (request, response)=>{
    response.status(201).json({
        "message" : "aqui se va crear un bootcamp"
    })
})

//Put - Patch: actualizar
app.put('/api/v1/bootcamps/:id' , (request, response)=>{
    response.status(200).json(
        {
            "message": `aqui vamos a ver el actualizar ${request.params.id}`
        }
    )
})


//Delete: sirve para borrar
app.delete('/api/v1/bootcamps/:id' , (request, response)=>{
    response.status(200).json(
        {
            "message": `aqui vamos a borrar  ${request.params.id}`
        }
    )})
// 3 Ejecutar servidor de desarrolo de express

app.listen(process.env.PORT , ()=>{
    console.log(`Servidor iniciado en puerto: ${process.env.PORT}`.bgGreen.red);
})