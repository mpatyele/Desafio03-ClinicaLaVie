import express from 'express';
import routes from './routes/routes.js';
import db from './database/index.js';
import errorHandler from "./middlewares/errorHandler.js"


const app = express()

db.hasConnection()

app.use(express.json())

app.use(routes)

// app.use(errorHandler)


export default app