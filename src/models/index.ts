import * as fs from "fs";
import * as path from "path";
import * as Sequelize from "sequelize";

const baseName: string = path.basename(module.filename);
// const env: string = process.env.NODE_ENV || "development";
// let config = require(path.resolve(`../config/config.json`))[env];

let db = null;

if (!db) {
  db = {};


  const sequelize: Sequelize.Sequelize = new Sequelize({
    username: "root",
    password: "Er1sl@ndio",
    database: "typescript_graphql",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false,
  });

  fs.readdirSync(__dirname)
    .filter((file: string) => {
      return (
        file.indexOf(".") !== 0 && file !== baseName && file.slice(-3) === ".js"
      );
    })
    .forEach((file: string) => {
      const model = sequelize.import(path.join(__dirname, file));
      db[model["name"]] = model;
    });

  Object.keys(db).forEach((modelName: string) => {
    if (db[modelName].associoate) {
      db[modelName].associoate(db);
    }
  });

  db["sequelize"] = sequelize;
}

export default db;
