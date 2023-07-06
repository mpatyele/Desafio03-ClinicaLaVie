import { Router } from 'express';
import PsiController from './app/controllers/PsiController.js';
import PacienteController from './app/controllers/pacienteController.js'

import { validate } from './middlewares/validate.js';


const routes = new Router();

// const authController = new AuthController;
routes.post('/create', PsiController.cadastrarPsi) //GET/psicologos
routes.post('/login', validate, PsiController.login)

routes.post('/pacientes', PacienteController.cadastrarPaciente )
routes.get('/pacientes', PacienteController.listarPacientes )
routes.get('/pacientes/:id', PacienteController.listarPacienteId )

// routes.post('/login', authController, PsiController.store);


export default routes
