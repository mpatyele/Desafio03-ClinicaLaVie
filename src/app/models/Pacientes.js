import { Sequelize, Model, DataTypes } from 'sequelize';
import db from "../../database/index.js";

const Pacientes = db.define("Pacientes",{
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
        idade: {
            type: DataTypes.INTEGER,
            allowNull: false,
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
          tableName: "pacientes",
          timestamps: true,
          underscored: true,
        }
    );
    
export default Pacientes;
    