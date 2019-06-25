import * as Sequelize from "sequelize";
import { BaseModelInterface } from "../interfaces/BaseModelInterface";
import { genSaltSync, hashSync, compareSync } from "bcryptjs";
import { ModelsInteface } from "../interfaces/ModelsInterface";

export interface UserAtttributes {
  id?: number;
  name?: string;
  email?: string;
  password?: string;
  photo?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface UserInstance
  extends Sequelize.Instance<UserAtttributes>,
    UserAtttributes {
  isPassword(encodedPassoword: string, password: string): boolean;
}

export interface UserModel
  extends BaseModelInterface,
    Sequelize.Model<UserInstance, UserAtttributes> {}

export default (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): UserModel => {
  const User: UserModel = sequelize.define(
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
      email: {
        type: DataTypes.STRING(128),
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING(128),
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      photo: {
        type: DataTypes.BLOB({
          length: "long"
        }),
        allowNull: false,
        defaultValue: null
      }
    },
    {
      tableName: "user",
      hooks: {
        // * criptografar a sennha do usuario antes de slavar a senha
        beforeCreate: (
          user: UserInstance,
          options: Sequelize.CreateOptions
        ): void => {
          // valor radom para criptografia
          const salt = genSaltSync();
          user.password = hashSync(user.password, salt);
        }
      }
    }
  );

  User.associate = (models: ModelsInteface): void => {};

  User.prototype.isPassword = (
    encodedPassoword: string,
    password: string
  ): boolean => {
    return compareSync(password, encodedPassoword);
  };

  return User;
};
