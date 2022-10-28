const express = require('express')
const {getAllUsers, getSingleUsers, postUsers, putUsers, deleteUsers} = require('../controllers/UserController')
const router = express.Router()

//Ruta de usuario

router.route('/')
            .get(getAllUsers)
            .post(postUsers)

router.route('/:id')
        .get(getSingleUsers)
        .put(putUsers)
        .delete(deleteUsers)

  module.exports = router