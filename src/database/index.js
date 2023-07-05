import Sequelize from 'sequelize';
import databaseConfig from '../config/database.js'

let db = {}

try {
    db = new Sequelize(databaseConfig)
} catch (error) {
    console.log(error)
}

async function hasConnection(){
    try {
        await db.authenticate()
        console.log("BD Conectado")
        
    } catch (error) {
        console.log(error)
        
    }
}

Object.assign(db, {
    hasConnection
})

export default db;