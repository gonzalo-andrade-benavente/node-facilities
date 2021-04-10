const express = require('express');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3001;
        this.facilitiesPath = '/app/facilities';

        this.middlewares();

        this.routes();

    }

    listen() {
        
        this.app.listen( this.port,  () => {
            console.log(`Server running at por ${ this.port }`);

        });
    }

    routes() {
        this.app.use( this.facilitiesPath, require('../routes/facilities') );
    }

    middlewares() {
        this.app.use( express.json() );

        this.app.use( express.static('public') );
    }

    // Connect Database?

}

module.exports = Server;