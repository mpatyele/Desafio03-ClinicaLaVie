import Sequelize, { Model, DataTypes } from 'sequelize';
import bcrypt from 'bcrypt';

class Psicologos extends Model {
    static init(sequelize){
        super.init({
            nome: Sequelize.STRING,
            email: Sequelize.STRING,
            password: Sequelize.VIRTUAL,
            password_hash: Sequelize.STRING,
            apresentacao: Sequelize.STRING
        }, {
            sequelize,
        }
        )

        this.addHook('beforeSave', async (user) => {
            if(Psicologos.password) {
                Psicologos.password_hash = await bcrypt.hash(Psicologos.password, 6)
            }
            return this
        })
    }
}

export default Psicologos