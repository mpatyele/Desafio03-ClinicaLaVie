import { Sequelize, Model, DataTypes } from "sequelize";
import db from "../../database/index.js";


const Psicologos = db.define(
  "Psicologos",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password_hash: {
      type: DataTypes.STRING,
    },
    crp: {
      type: DataTypes.INTEGER,
      validate: {
        len: {
          args: 8,
          msg: "CRP deve conter no maximo 8 caracteres. ",
        },
      },
    },
    apresentacao: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
      field: "created_At",
    },

    updatedAt: {
      type: DataTypes.DATE,
      field: "updated_At",
    },
  },
  {
    tableName: "psicologos",
    timestamps: true,
    underscored: true,
  }
);

export default Psicologos;