const express = require('express')

const router = express.Router()

// establecer las rutas
//get: obtener datos R
router.get('/', (request, response)=>{
    response.status(200).json(
        {
            "message": "aqui se va a mostar todo los bootcamps"
        }
    )
    })

    // // obtner recursos po id

router.get('/:id' , (request, response)=>{
    response.status(200).json(
        {
            "message": `aqui se va a mostar el bootcamps cuyo id es ${request.params.id}`
        }
    )
})

// metodo post: crear un nuevo recurso

router.post('/', (request, response)=>{
    response.status(201).json({
        "message" : "aqui se va crear un bootcamp"
    })
})

//Put - Patch: actualizar
router.put('/:id' , (request, response)=>{
    response.status(200).json(
        {
            "message": `aqui vamos a ver el actualizar ${request.params.id}`
        }
    )
})

router.delete('/:id' , (request, response)=>{
    response.status(200).json(
        {
            "message": `aqui vamos a borrar  ${request.params.id}`
        }
    )})

    module.exports = router