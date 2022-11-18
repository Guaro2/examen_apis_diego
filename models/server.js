const express = require('express')
const cors = require('cors')
const {DbConection} = require('../database/config')

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.encuestasPath = '/api/encuestas'


        this.conectarDB()
        this.middlewares()
        this.routes()
    }

    async conectarDB(){
        await DbConection()
    }

    middlewares(){
        this.app.use( cors() );
        this.app.use( express.static('public') )
        this.app.use( express.json() )
    }

    routes(){
        this.app.use(this.encuestasPath,require('../routes/encuestas'))

    }

    listen(){
        this.app.listen(this.port,(req,res)=>{
            console.log(`Escuchando por el puerto ${this.port}`)
        })
    }
}

module.exports = Server