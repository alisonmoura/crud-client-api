'use strict'

// importar mongoose (ODM - Object Document Mapping)
const mongoose = require('mongoose')

// importar body-parser
const bodyParser = require('body-parser')

// importar o Express
const Express = require('express')

// Importando models
const Client = require('./model/client')

// Importando controllers
const ClientController = require('./controller/client-controller')

class Server {

    constructor() {
        
        // Instanciar o Express
        this.app = new Express();

        // Configuração do body parser
        this.app.use(bodyParser.json());

        // Configuração de CORS
        this.app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Methods", "GET, PUT, DELETE, POST");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
            next();
        });

        // Connectar no banco de dados (mLab)
        mongoose.connect('mongodb://alison:alison@ds145302.mlab.com:45302/crud-cliente');

        // Registar os Models (Collection) (criar as collections)
        new Client()

        // Instanciar o ClientController
        this.clientController = new ClientController(this.app);

        this.app.listen(3000, () =>{
            console.log("Api rodando na porta: 3000")
        });
    }
    
}

new Server();