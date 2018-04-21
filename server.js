'use strict'

// importar mongoose
const mongoose = require('mongoose')

// importar o Express
const Express = require('express')
const ClientController = require('./controller/client-controller')

class Server {

    constructor() {
        // Instanciar o Express
        this.app = new Express();

        // Connectar no banco de dados (mLab)
        mongoose.connect('mongodb://alison:alison@ds145302.mlab.com:45302/crud-cliente');

        const Cat = mongoose.model('Cat', { name: String });
        
        const kitty = new Cat({ name: 'Zildjian' });
        kitty.save()
            .then(() => console.log('meow'))
            .catch(err => {throw err});

        // Instanciar o ClientController
        this.clientController = new ClientController(this.app);

        this.app.listen(3000);
    }
    
}

new Server();