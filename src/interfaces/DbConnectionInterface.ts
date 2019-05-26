import * as Sequelize from "sequelize";
import { ModelsInteface } from "./ModelsInterface";

export interface DbConnection extends ModelsInteface {
  sequelize: Sequelize.Sequelize;
}
