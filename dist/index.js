"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const utils_1 = require("./utils/utils");
const app_1 = require("./app");
const index_1 = require("./models/index");
const PORT = utils_1.normalizePort(process.env.port || 3000);
const server = http.createServer(app_1.default);
index_1.default.sequelize.sync().then(() => {
    server.listen(PORT);
    server.on("listening", utils_1.onListening(server));
    server.on("error", utils_1.onError(server));
});
