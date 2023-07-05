import { Router } from 'express';
import PsiController from './app/controllers/psiController.js'
import { AuthController } from './app/controllers/Auth/AuthController.js';
import { validate } from './middlewares/validate.js';


const routes = new Router();

const authController = new AuthController;
routes.post('/create', PsiController.cadastrarPsi) //GET/psicologos
routes.post('/login', validate, PsiController.login)
// routes.post('/validate', authController.validate)



// routes.post('/login', authController, PsiController.store);


export default routes
