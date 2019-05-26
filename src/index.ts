import * as http from "http";
import app from "./app";
const port: number = 3000;
const server = http.createServer(app);

server.listen(port);
server.on("listening", () => {
  console.log(`Server running ==> ${port}`);
});
