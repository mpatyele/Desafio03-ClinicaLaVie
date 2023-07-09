import { Sequelize, Model, DataTypes } from 'sequelize';
import db from "../../database/index.js";
import Psicologos from '../models/Psicologos.js';
import Pacientes from '../models/Pacientes.js';

const Atendimentos = db.define('Atendimentos', {
    idConsulta:{
     type: DataTypes.INTEGER,
     primaryKey: true,
     autoIncrement: true,
     field: "idConsulta"
    },
    id_paciente:{
     type: DataTypes.INTEGER,
     references:{
       Model: Pacientes,
       key: 'id',
     }
    },
    id_psicologo:{
     type: DataTypes.INTEGER,
     references:{
       Model: Psicologos,
       key: 'id',
     }
    },
    data_atendimento: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    observacao: {
        type: DataTypes.STRING,
        allowNull: false,  
    },
    },
    { 
      tableName: 'atendimentos',
      timestamps: false,
      createdAt: false,
      updatedAt: false
    });

   
   export default Atendimentos;