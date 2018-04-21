'use strict'

class ClientController{

    constructor(app){
        app.get('/clients', this.findAll)
    }

    findAll(req, res){
        res.json( [
            {
                name: "Jão da Silva",
                email: "jao@gmail.com",
                cpf: "9999999"
            },
            {
                name: "Maria da Silva",
                email: "mar@gmail.com",
                cpf: "345652432634"
            },
            {
                name: "Pafúncio da Silva",
                email: "paff@gmail.com",
                cpf: "83457628342"
            }
        ])
    }

}

module.exports = ClientController;