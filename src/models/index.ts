import * as fs from "fs";
import * as path from "path";
import * as Sequelize from "sequelize";
import { DbConnection } from "../interfaces/DbConnectionInterface";

const baseName: string = path.basename(module.filename);
// const env: string = process.env.NODE_ENV || "development";

let db = null;

if (!db) {
  db = {};
  const sequelize: Sequelize.Sequelize = new Sequelize(
    "graphql_blog_development",
    "root",
    "",
    { dialect: "mysql" }
  );

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
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

  db["sequelize"] = sequelize;
}

export default <DbConnection>db;
