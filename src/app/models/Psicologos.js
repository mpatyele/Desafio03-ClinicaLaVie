import { Sequelize, Model, DataTypes } from "sequelize";
import db from "../../database/index.js";
import bcrypt from "bcrypt";

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
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { args: true, msg: 'password can\'t be empty' }, 
        len: { args: 6, msg: "Senha deve conter mais que 6 caracteres.",
        },
      },
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
    created_At: {
      type: DataTypes.DATE,
    },
    updated_At: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "psicologos",
  }
);

Psicologos.addHook("beforeSave", async (Psicologos) => {
  if (Psicologos.password) {
    Psicologos.password_hash = await bcrypt.hash(Psicologos.password, 6);
  }
  return;
});

export default Psicologos;

// class Psicologos extends Model {
//     static init (Sequelize){
//         super.init({
//             nome: DataTypes.STRING,
//             email: DataTypes.STRING,
//             password: DataTypes.VIRTUAL,
//             password_hash: DataTypes.STRING,
//             apresentacao: DataTypes.STRING
//         },{
//             Sequelize,
//         }
//         )

//         // this.addHook('beforeSave', async (Psicologos) => {
//         //     if(Psicologos.password) {
//         //         Psicologos.password_hash = await bcrypt.hash(Psicologos.password, 6)
//         //     }
//         //     return this
//         // })
//     }
// }
