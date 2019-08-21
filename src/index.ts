import * as http from "http";
import { normalizePort, onError, onListening } from "./utils/utils";
import app from "./app";
import db from "./models/index";

const PORT = normalizePort(process.env.port || 3000);
const server = http.createServer(app);

db.sequelize.sync().then(() => {

    server.listen(PORT);
    server.on("listening", onListening(server));
    server.on("error", onError(server));
    
})
