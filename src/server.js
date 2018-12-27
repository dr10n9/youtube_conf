const express = require('express');
class Server {
    constructor() { 
        this.app = express();
        this.config();
    }
    config() { }
}

module.exports.Server = new Server().app();