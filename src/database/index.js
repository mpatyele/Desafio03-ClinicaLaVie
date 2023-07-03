import Sequelize from 'sequelize';
import Psicologos from '../app/models/Psicologos.js';
import databaseConfig from '../config/database.js'

const models = [Psicologos]

class Database {
    constructor() {
        this.init()
        
    }
    init() {
        this.connection = new Sequelize(databaseConfig)

        models.map(model => model.init(this.connection))
        
    }
}

export default new Database()