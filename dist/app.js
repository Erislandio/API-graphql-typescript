"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class App {
    constructor() {
        this.express = express();
        this.middleware();
    }
    middleware() {
        this.express.use("/hello", (req, res, next) => {
            res.send({
                hello: "Olá mundo!"
            });
        });
    }
}
exports.default = new App().express;
