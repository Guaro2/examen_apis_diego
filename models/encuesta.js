const { Schema, model } = require('mongoose');

const EncuestaSchema = Schema({


    nombreEncuesta:{
        type:String
    },
    fecha:{
        type:Date
        
    },
    documentoEncuestado:{
        type:Number

    },
    nombreEncuestado:{
        type:String

    },
    edad:{
        type:Number

    },
    genero:{
        type:String

    },
    empleado:{
        type:Boolean

    }
})

module.exports = model('Encuesta',EncuestaSchema)