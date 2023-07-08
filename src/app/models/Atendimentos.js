import { Sequelize, Model, DataTypes } from 'sequelize';
import db from "../../database/index.js";
import Psicologos from '../models/Psicologos.js';
import Pacientes from '../models/Pacientes.js';

const Atendimentos = db.define("Atendimentos", {
        idConsulta: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: "idConsulta"
        },
        Paciente_id: {          
            type: DataTypes.INTEGER,                        
            references: {
                model: Pacientes,
                key: "id",
            },
            field: "id_paciente",
            
                        
        },
        idPsicologo: {
            type: DataTypes.INTEGER(8),
            references: {
                model: Psicologos,
                key: "id",
            },
            
        },
        numProntuario: {
            type: DataTypes.STRING,
        },
        data_atendimento: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        observacao: {
            type: DataTypes.STRING,
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
        tableName: "atendimentos",
        timestamps: true,
        underscored: true,
        }
    );
    

export default Atendimentos;