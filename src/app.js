import express from 'express';
import routes from './routes.js';
import db from './database/index.js';


const app = express()

db.hasConnection()

app.use(express.json())

app.use(routes)


export default app