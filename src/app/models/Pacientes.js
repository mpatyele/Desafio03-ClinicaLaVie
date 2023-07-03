import Sequelize, { Model, DataTypes } from 'sequelize';
import bcrypt from bcrypt;

class Pacientes extends Model {
    static init(sequelize){
        super.init({
            nome: Sequelize.STRING,
            email: Sequelize.STRING,
            idade: Sequelize.INTEGER
        })
    }
}