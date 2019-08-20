import * as Sequelize from "sequelize";
import { BaseModelInterface } from "../interfaces/BaseModelInterface";
import { genSaltSync, hashSync, compareSync } from "bcryptjs";
import { ModelsInterface } from "../interfaces/ModelsInterface";

export interface UserAttributes {
  id?: number;
  name?: string;
  email?: string;
  password?: string;
  photo?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface UserInstance
  extends Sequelize.Instance<UserAttributes>,
    UserAttributes {
  isPassword(encodedPassword: string, password: string): boolean;
}

export interface UserModel
  extends BaseModelInterface,
    Sequelize.Model<UserInstance, UserAttributes> {}

export default (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): UserModel => {
  const User: UserModel = sequelize.define<UserInstance, UserAttributes>(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING(128),
        allowNull: false
      },
      password: {
        type: DataTypes.STRING(128),
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      email: {
        type: DataTypes.STRING(128),
        allowNull: false,
        unique: true
      },
      photo: {
        type: DataTypes.BLOB({
          length: "long"
        }),
        allowNull: true,
        defaultValue: null
      }
    },
    {
      tableName: "users",
      hooks: {
        beforeCreate: (
          user: UserInstance,
          options: Sequelize.CreateOptions
        ): void => {
          // ! criptografia de senha
          const salt = genSaltSync();
          user.password = hashSync(user.password, salt);
        }
      }
    }
  );

  User.associate = (models: ModelsInterface): void => {};

  User.prototype.isPassword = (
    econdedPassword: string,
    password: string
  ): boolean => {
    return compareSync(password, econdedPassword);
  };

  return User;
};
