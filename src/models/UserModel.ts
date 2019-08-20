import * as Sequelize from "sequelize";

export interface UserAttributes {
  id?: number;
  name?: string;
  email?: string;
  password?: string;
  photo?: string;
}

export interface UserInstance
  extends Sequelize.Instance<UserAttributes>,
    UserAttributes {}
